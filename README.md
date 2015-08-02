# Conformer

Conformer is a dependency free ie9 and up library for matching container heights.

It is AMD/Common enabled as well as living on the window if it needs to, and available through NPM and Bower.

## Install
    
NPM: 
    
    npm install conformer --save
    
Bower:    
    
    bower install conformer -S

## Usage

```
    var Conformer = require('conformer');
    var conformer = new Conformer({
                    debounceRate: 200,
                    selector: '.a-custom-selector',
                    threshold: MOBILE_BREAKPOINT,
                    type: 'all'
                });
```

## Options

### debounceRate

Resize events are debounced. The default is 200ms, feel free to adjust.

### selector

Uses querySelectorAll. Defaults to '.conformer'. 

### threshold

Many mobile layouts wont need height matching, whereas desktop will. Pass your mobile threshold here.

Defaults to 0.

### type

Takes 'all' or 'row'. Defaults to row, which matches all items at same offset. All sets the entire dom group to the same height.


## License

The MIT License (MIT)

Copyright (c) 2015 Sam Estok

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

