;
(function() {
	'use strict';

	/**
	 * Instantiate Conformer on the specified CSS selectors.
	 *
	 * @constructor
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function Conformer( options ) {

		options = options || {};

		// selector to apply to, defaults to the class "conformer"

		this.selector = options.selector || '.conformer';

		var elements = document.querySelectorAll( this.selector );

		if ( elements.length <= 1 ) {
			if ( typeof console == 'object' ) {
				console.log( 'Called Conformer but not enough elements found, exiting.' );
			}
			return;
		}

		// default state
		this.active = false;

		// convert nodelist to array and store on this.el

		this.storeElements( elements );

		// set a debounce rate for resize that defaults to 200 ms
		this.debounceRate = options.debounceRate || 200;

		// a threshold that disables matchheight below a passed viewport width
		this.threshold = options.threshold || 0;

		// whether to apply the height matching to items on the same row. Takes 'all' or defaults to 'row'.
		this.type = options.type || 'row';

		// do this thing
		this.bindEvents();
		this.matchHeights();

	}

	Conformer.prototype.bindEvents = function() {
		var _this = this;
		// bind resize listener
		window.addEventListener( 'resize', function(){
			return _this.handleResize();
		} );
	};

	Conformer.prototype.storeElements = function( elements ) {
		var targets = [];
		for ( var i = elements.length; i--; targets.unshift( elements[i] ) ) {}
		this.el = targets;
	};

	Conformer.prototype.debounceTimer = function() {};

	Conformer.prototype.handleResize = function() {
		var _this = this;
		clearTimeout( this.debounceTimer );
		this.debounceTimer = setTimeout( function(){
			return _this.matchHeights();
		}, this.debounceRate );
	};

	Conformer.prototype.resetHeights = function() {

		if ( !this.active ) {
			return;
		}

		this.el.forEach( function( element ) {
			element.style.height = '';
		} );

		this.active = false;

	};

	Conformer.prototype.matchHeights = function() {

		if ( window.innerWidth <= this.threshold ) {
			this.resetHeights();
			return;
		}

		if ( this.type === 'all' ) {
			this.applyHeight( this.el );
			return;
		}

		this.processByRow();

	};

	Conformer.prototype.processByRow = function() {

		var group = [],
			offset,
			i = 0;

		this.el.forEach( function( element ) {

			if ( i === 0 ) {
				group.push( element );
			}
			else if ( offset === element.offsetTop ) {
				group.push( element );
				if ( this.el.length === ( i + 1 ) ) {
					this.applyHeight( group );
				}
			}
			else {
				this.applyHeight( group );
				group = [];
				group.push( element );
			}

			offset = element.offsetTop;

			i++;
		}, this );

	};

	Conformer.prototype.applyHeight = function( group ) {

		var height = 0;

		group.forEach( function( element ) {
			element.style.height = '';
			if ( element.offsetHeight > height ) {
				height = element.offsetHeight;
			}
		} );

		group.forEach( function( element ) {
			element.style.height = height + 'px';
		} );

		this.active = true;

	};

	if ( typeof define === 'function' && typeof define.amd === 'object' && define.amd ) {

		// AMD. Register as an anonymous module.
		define( function() {
			return Conformer;
		} );
	}
	else if ( typeof module !== 'undefined' && module.exports ) {
		module.exports.Conformer = Conformer;
	}
	else {
		window.Conformer = Conformer;
	}
}());