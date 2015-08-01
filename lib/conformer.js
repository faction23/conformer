;
(function() {
	'use strict';

	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function Conformer( layer, options ) {
		console.log( 'hello from conformer' );
	}

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