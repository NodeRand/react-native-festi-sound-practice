import HeaderNoTabs from '@/components/header-no-tabs';
import { StyleSheet, Text, View } from 'react-native';

export default function MusicScreen() {
    return (
        <>
            <HeaderNoTabs text="음악 재생" />
            <View style={styles.container}>
                <Text style={styles.text}>음악재생</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
