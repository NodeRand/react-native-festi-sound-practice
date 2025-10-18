import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

interface AnimatedTabButtonProps extends BottomTabBarButtonProps {
    children: React.ReactNode;
}

export function AnimatedTabButton({
    children,
    style,
    onPress,
    ...props
}: AnimatedTabButtonProps) {
    const fadeAnim = useRef(new Animated.Value(0.3)).current;

    // 선택 상태 변화에 따른 페이드인 애니메이션
    useEffect(() => {
        if (props.accessibilityState?.selected) {
            // 선택된 탭: 0.5초 페이드인
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            // 선택되지 않은 탭: 기본 상태
            fadeAnim.setValue(1);
        }
    }, [props.accessibilityState?.selected, fadeAnim]);

    return (
        <TouchableOpacity
            style={[
                style,
                { flex: 1, alignItems: 'center', justifyContent: 'center' },
            ]}
            onPress={onPress}
            activeOpacity={0.3} // 누를 때 연해지는 효과
            accessible={props.accessible}
            accessibilityRole={props.accessibilityRole}
            accessibilityState={props.accessibilityState}
            accessibilityLabel={props.accessibilityLabel}
        >
            <Animated.View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: props.accessibilityState?.selected ? fadeAnim : 1,
                }}
            >
                {children}
            </Animated.View>
        </TouchableOpacity>
    );
}
