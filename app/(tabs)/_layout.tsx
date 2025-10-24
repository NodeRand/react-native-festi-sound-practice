import { Tabs } from 'expo-router';
import React from 'react';

import { AnimatedTabButton } from '@/components/animated-tab-button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.light.tabIconSelected, // 초록색으로 변경
                tabBarInactiveTintColor: Colors.light.tabIconDefault, // 비활성 색상
                headerShown: false,
                tabBarButton: AnimatedTabButton,
                tabBarShowLabel: true, // 라벨 표시 활성화
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#e5e7eb',
                    height: 100, // 라벨을 위해 높이 증가
                    paddingBottom: 30,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                    margin: 0,
                    padding: 0,
                    marginTop: 4,
                },
                tabBarIconStyle: {
                    marginBottom: 0, // 라벨과의 간격 조정
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: '홈',
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name="house.fill" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="event"
                options={{
                    title: '이벤트',
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name="star.fill" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="schedule"
                options={{
                    title: '행사일정',
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name="calendar" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: '내정보',
                    tabBarIcon: ({ color }) => (
                        <IconSymbol
                            size={28}
                            name="person.fill"
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
