"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _VisuallyHiddenModule = _interopRequireDefault(require("./VisuallyHidden.module.css"));
var _excluded = ["children", "className", "element"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// Changed to HTMLElement for a more generic type

/**
 * Renders content that remains visually hidden to users but accessible to screen readers,
 * unless a specific key is pressed, making it visible for debugging purposes in development.
 *
 * @param children The content to be visually hidden.
 * @param className An optional CSS class to apply to the wrapper element for additional styling.
 * @param element The element type to render, defaults to "span".
 * @param delegated Additional props spread over the element for further HTML attribute extension.
 */
var VisuallyHidden = function VisuallyHidden(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$element = _ref.element,
    Component = _ref$element === void 0 ? 'span' : _ref$element,
    delegated = _objectWithoutProperties(_ref, _excluded);
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    forceShow = _React$useState2[0],
    setForceShow = _React$useState2[1]; // State to control visibility for debugging.

  _react["default"].useEffect(function () {
    // This effect toggles visibility based on key presses, intended for use in non-production environments.
    if (process.env.NODE_ENV !== 'production') {
      var handleKeyDown = function handleKeyDown(ev) {
        // Enables visibility when the 'Alt' key is pressed.
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };
      var handleKeyUp = function handleKeyUp() {
        // Disables visibility when any key is released.
        setForceShow(false);
      };

      // Event listeners for key down and up to control the visibility.
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      // Cleanup function to remove event listeners on component unmount.
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  // Conditional rendering based on `forceShow` state to toggle between hidden and visible states.
  return forceShow ?
  /*#__PURE__*/
  // Renders children in a wrapper with a class for visible state.
  _react["default"].createElement(Component, {
    className: _VisuallyHiddenModule["default"].showWrapper
  }, children) :
  /*#__PURE__*/
  // Default rendering with children in a visually hidden wrapper, applying any additional className and delegated props.
  _react["default"].createElement(Component, _extends({
    className: "".concat(className, " ").concat(_VisuallyHiddenModule["default"].wrapper)
  }, delegated), children);
};
var _default = exports["default"] = VisuallyHidden;