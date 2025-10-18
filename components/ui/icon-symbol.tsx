// Uses native SF Symbols on iOS, and Material Icons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import {
    OpaqueColorValue,
    Platform,
    TextStyle,
    ViewStyle,
    type StyleProp,
} from 'react-native';

type IconMapping = Record<
    SymbolViewProps['name'],
    ComponentProps<typeof MaterialIcons>['name']
>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
    'house.fill': 'home',
    'paperplane.fill': 'send',
    'chevron.left.forwardslash.chevron.right': 'code',
    'chevron.right': 'chevron-right',
    calendar: 'event',
    'person.fill': 'person',
    'star.fill': 'star',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
    name,
    size = 24,
    color,
    style,
    weight = 'regular',
}: {
    name: IconSymbolName;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<ViewStyle>;
    weight?: SymbolWeight;
}) {
    // iOS: Use native SF Symbols
    if (Platform.OS === 'ios') {
        return (
            <SymbolView
                name={name}
                size={size}
                tintColor={color}
                weight={weight}
                style={style}
            />
        );
    }

    // Android/Web: Use Material Icons
    return (
        <MaterialIcons
            color={color}
            size={size}
            name={MAPPING[name]}
            style={style as StyleProp<TextStyle>}
        />
    );
}
