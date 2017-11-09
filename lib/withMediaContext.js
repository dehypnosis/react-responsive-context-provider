'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withMediaContext;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withMediaContext(Component) {
  Component.contextTypes = Component.contextTypes || {};
  Component.contextTypes.media = _propTypes2.default.object;
  return Component;
}