
/**
 * dependencies.
 */

var before = require('before');

/**
 * Wrap the given element with `el`.
 * 
 * @param {Element} el
 * @param {Element} wrap
 */

module.exports = function(el, wrap){
  before(el, wrap);
  el = el.firstElementChild || el;
  wrap.appendChild(el);
};
