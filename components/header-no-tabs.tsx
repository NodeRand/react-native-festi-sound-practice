// components/header-no-tabs.tsx
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, Stack } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HeaderNoTabsProps {
    text?: string;
    showBack?: boolean;
    showMenu?: boolean;
    onMenuPress?: () => void;
}

export default function HeaderNoTabs({
    text = '',
    showBack = true,
    showMenu = false,
    onMenuPress,
}: HeaderNoTabsProps) {
    return (
        <Stack.Screen
            options={{
                header: () => (
                    <SafeAreaView edges={['top']} style={styles.safeArea}>
                        <View style={styles.container}>
                            {showBack ? (
                                <TouchableOpacity
                                    onPress={() => router.back()}
                                    style={styles.button}
                                >
                                    <MaterialIcons
                                        name="arrow-back"
                                        size={24}
                                        color="#000"
                                    />
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.button} />
                            )}

                            <Text style={styles.text}>{text}</Text>

                            {showMenu ? (
                                <TouchableOpacity
                                    onPress={onMenuPress}
                                    style={styles.button}
                                >
                                    <MaterialIcons
                                        name="more-vert"
                                        size={24}
                                        color="#000"
                                    />
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.button} />
                            )}
                        </View>
                    </SafeAreaView>
                ),
            }}
        />
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    button: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginLeft: 12,
    },
});
