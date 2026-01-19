import type { ColorValue, ViewProps } from 'react-native';
import type { BubblingEventHandler, Int32, WithDefault, Float } from 'react-native/Libraries/Types/CodegenTypes';
interface TargetedEvent {
    target: Int32;
}
interface TextLayoutEvent extends TargetedEvent {
    lines: string[];
}
type EllipsizeMode = 'head' | 'middle' | 'tail' | 'clip';
interface NativeProps extends ViewProps {
    numberOfLines?: Int32;
    allowFontScaling?: WithDefault<boolean, true>;
    ellipsizeMode?: WithDefault<EllipsizeMode, 'tail'>;
    selectable?: boolean;
    selectionColor?: ColorValue;
    onTextLayout?: BubblingEventHandler<TextLayoutEvent>;
    baselineOffset?: Float;
}
declare const _default: import("react-native/Libraries/Utilities/codegenNativeComponent").NativeComponentType<NativeProps>;
export default _default;
//# sourceMappingURL=RNUITextViewNativeComponent.d.ts.map