"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ToastContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useKeydown = _interopRequireDefault(require("../../hooks/use-keydown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ToastContext = exports.ToastContext = /*#__PURE__*/_react["default"].createContext(undefined);
/**
 * Provides a context for showing and managing toasts.
 * @param children {ReactNode} - The child components to be rendered within the ToastProvider.
 */
var ToastProvider = function ToastProvider(_ref) {
  var children = _ref.children;
  // State to store the toasts, initialized with two example toasts
  var _useState = (0, _react.useState)([{
      id: crypto.randomUUID(),
      message: 'It works!',
      variant: 'success'
    }, {
      id: crypto.randomUUID(),
      message: 'Logged in',
      variant: 'success'
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    toasts = _useState2[0],
    setToasts = _useState2[1];

  // Callback to clear all toasts, triggered on 'Escape' key press
  var handleEscape = (0, _react.useCallback)(function () {
    setToasts([]);
  }, []);

  // Hook to listen for the 'Escape' key and clear toasts
  (0, _useKeydown["default"])('Escape', handleEscape);

  /**
   * Creates a new toast message.
   * @param message {string} - The message to be displayed in the toast.
   * @param variant {ToastVariant} - The variant of the toast, determining its style.
   */
  function createToast(message, variant) {
    var nextToasts = [].concat(_toConsumableArray(toasts), [{
      id: crypto.randomUUID(),
      message: message,
      variant: variant
    }]);
    setToasts(nextToasts);
  }

  /**
   * Dismisses a toast by its ID.
   * @param id {string} - The ID of the toast to dismiss.
   */
  function dismissToast(id) {
    var nextToasts = toasts.filter(function (toast) {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  // Context provider to pass down the toasts and toast management functions
  return /*#__PURE__*/_react["default"].createElement(ToastContext.Provider, {
    value: {
      toasts: toasts,
      createToast: createToast,
      dismissToast: dismissToast
    }
  }, children);
};
var _default = exports["default"] = ToastProvider;