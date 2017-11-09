'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
var ContextProvider = function (_Component) {
  (0, _inherits3.default)(ContextProvider, _Component);

  function ContextProvider() {
    (0, _classCallCheck3.default)(this, ContextProvider);
    return (0, _possibleConstructorReturn3.default)(this, (ContextProvider.__proto__ || (0, _getPrototypeOf2.default)(ContextProvider)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContextProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          context = _props.context,
          children = _props.children;

      //

      var media = typeof context === 'function' ? context() : context;

      //
      return { media: media };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children.length > 1 ? (0, _react.createElement)('div', {}, children) : (0, _react.cloneElement)(children, {});
    }
  }]);
  return ContextProvider;
}(_react.Component);

ContextProvider.propTypes = {
  context: _propTypes2.default.any
};
ContextProvider.childContextTypes = {
  media: _propTypes2.default.any
};
exports.default = ContextProvider;