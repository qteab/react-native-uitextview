"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UITextView = UITextView;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _RNUITextViewChildNativeComponent = _interopRequireDefault(require("./RNUITextViewChildNativeComponent"));
var _RNUITextViewNativeComponent = _interopRequireDefault(require("./RNUITextViewNativeComponent"));
var _util = require("./util.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TextAncestorContext = /*#__PURE__*/_react.default.createContext([false, _reactNative.StyleSheet.create({})]);
const textDefaults = {
  allowFontScaling: true,
  selectable: true
};
const useTextAncestorContext = () => _react.default.useContext(TextAncestorContext);
function UITextViewChild({
  style,
  children,
  baselineOffset,
  ...rest
}) {
  const [isAncestor, rootStyle] = useTextAncestorContext();

  // Flatten the styles, and apply the root styles when needed
  const flattenedStyle = _react.default.useMemo(() => (0, _util.flattenStyles)(rootStyle, style), [rootStyle, style]);
  if (!isAncestor) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(TextAncestorContext.Provider, {
      value: [true, flattenedStyle],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RNUITextViewNativeComponent.default, {
        ...textDefaults,
        ...rest,
        // ellipsizeMode={rest.ellipsizeMode ?? rest.lineBreakMode ?? 'tail'}
        style: [flattenedStyle]
        // @ts-expect-error Weirdness
        ,
        onPress: undefined,
        onLongPress: undefined,
        children: _react.default.Children.toArray(children).map((c, index) => {
          if (/*#__PURE__*/_react.default.isValidElement(c)) {
            return c;
          } else if (typeof c === 'string' || typeof c === 'number') {
            return (
              /*#__PURE__*/
              // @ts-expect-error @TODO fix this type
              (0, _react.createElement)(_RNUITextViewChildNativeComponent.default, {
                ...rest,
                key: index,
                style: flattenedStyle,
                shadowRadius: baselineOffset,
                text: c.toString()
              })
            );
          }
          return null;
        })
      })
    });
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: _react.default.Children.toArray(children).map((c, index) => {
        if (/*#__PURE__*/_react.default.isValidElement(c)) {
          return c;
        } else if (typeof c === 'string' || typeof c === 'number') {
          return (
            /*#__PURE__*/
            // @ts-expect-error @TODO fix this type
            (0, _react.createElement)(_RNUITextViewChildNativeComponent.default, {
              ...rest,
              key: index,
              style: flattenedStyle,
              shadowRadius: baselineOffset,
              text: c.toString()
            })
          );
        }
        return null;
      })
    });
  }
}
function UITextViewInner(props) {
  const [isAncestor] = useTextAncestorContext();

  // Even if the uiTextView prop is set, we can still default to using
  // normal selection (i.e. base RN text) if the text doesn't need to be
  // selectable
  if ((!props.selectable || !props.uiTextView) && !isAncestor) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      ...props
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(UITextViewChild, {
    ...props
  });
}
function UITextView(props) {
  if (_reactNative.Platform.OS !== 'ios') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      ...props
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(UITextViewInner, {
    ...props
  });
}
//# sourceMappingURL=Text.js.map