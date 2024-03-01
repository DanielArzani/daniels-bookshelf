"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ToastProvider = require("./ToastProvider");
var _Toast = _interopRequireDefault(require("./Toast"));
var _ToastShelfModule = _interopRequireDefault(require("./ToastShelf.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Assuming the ToastContext is correctly typed, otherwise, you'll need to define or import these types

/**
 * Displays a list of toast notifications.
 */
var ToastShelf = function ToastShelf() {
  var toastContext = (0, _react.useContext)(_ToastProvider.ToastContext);

  // Safeguard in case the context is not provided or is undefined
  if (!toastContext) {
    console.error('ToastShelf must be used within a ToastProvider');
    return null;
  }
  var toasts = toastContext.toasts;
  return /*#__PURE__*/_react["default"].createElement("ol", {
    className: _ToastShelfModule["default"].wrapper,
    role: "region",
    "aria-live": "assertive",
    "aria-label": "Notification"
  }, toasts.map(function (toast) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: toast.id,
      className: _ToastShelfModule["default"].toastWrapper
    }, /*#__PURE__*/_react["default"].createElement(_Toast["default"], {
      id: toast.id,
      variant: toast.variant
    }, toast.message));
  }));
};
var _default = exports["default"] = ToastShelf;