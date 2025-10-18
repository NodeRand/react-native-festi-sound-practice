import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>내정보</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
