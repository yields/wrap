
# wrap

  Wrap an element.

## Installation

    $ component install yields/wrap

## Example

```js
var domify = require('domify');
var p = document.querySelector('p');
var div = domify('<div></div>')[0];
wrap(p, div);
```

## API

### wrap(el, wrap)

Wraps `el` with `wrap`.

## License

  MIT
