"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFeather = require("react-feather");
var _ToastProvider = require("./ToastProvider");
var _VisuallyHidden = _interopRequireDefault(require("../VisuallyHidden/VisuallyHidden"));
var _ToastModule = _interopRequireDefault(require("./Toast.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Import the icon props type from react-feather for complete type accuracy.

// Props type definition

// Mapping of variant types to icons
var ICONS_BY_VARIANT = {
  notice: _reactFeather.Info,
  warning: _reactFeather.AlertTriangle,
  success: _reactFeather.CheckCircle,
  error: _reactFeather.AlertOctagon
};

/**
 * Displays a toast message with an icon, content, and a dismiss button.
 * @param id {string} - Unique identifier for the toast message.
 * @param variant {VariantType} - Type of the toast message which influences the icon and styling.
 * @param children {React.ReactNode} - The content of the toast message.
 */
var Toast = function Toast(_ref) {
  var id = _ref.id,
    variant = _ref.variant,
    children = _ref.children;
  // @ts-ignore
  var _useContext = (0, _react.useContext)(_ToastProvider.ToastContext),
    dismissToast = _useContext.dismissToast;
  var Icon = ICONS_BY_VARIANT[variant]; // Select the appropriate icon based on the variant

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_ToastModule["default"].toast, " ").concat(_ToastModule["default"][variant])
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _ToastModule["default"].iconContainer
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    size: 24
  }), " "), /*#__PURE__*/_react["default"].createElement("p", {
    className: _ToastModule["default"].content
  }, /*#__PURE__*/_react["default"].createElement(_VisuallyHidden["default"], null, variant, " -"), ' ', children, " "), /*#__PURE__*/_react["default"].createElement("button", {
    className: _ToastModule["default"].closeButton,
    onClick: function onClick() {
      return dismissToast(id);
    } // Dismiss the toast on click
    ,
    "aria-label": "Dismiss message",
    "aria-live": "off"
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.X, {
    size: 24
  }), " "));
};
var _default = exports["default"] = Toast;