'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResponsiveMultiQuery = require('react-responsive-multi-query');

var _reactResponsiveMultiQuery2 = _interopRequireDefault(_reactResponsiveMultiQuery);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextProvider = require('./ContextProvider');

var _ContextProvider2 = _interopRequireDefault(_ContextProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
var MediaQuery = function MediaQuery(props) {
  var children = props.children,
      query = props.query,
      moreProps = (0, _objectWithoutProperties3.default)(props, ['children', 'query']);

  // convert responsive query to multi query

  var multiQuery = query.map(function (v) {
    return {
      query: v.query,
      props: {
        context: v.context
      }
    };
  });

  return _react2.default.createElement(
    _reactResponsiveMultiQuery2.default,
    (0, _extends3.default)({}, moreProps, { query: multiQuery }),
    _react2.default.createElement(
      _ContextProvider2.default,
      null,
      children
    )
  );
};

//


MediaQuery.propTypes = {
  children: _propTypes2.default.any.isRequired,
  query: _propTypes2.default.any.isRequired
};

exports.default = MediaQuery;