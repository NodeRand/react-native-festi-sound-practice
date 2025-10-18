import { StyleSheet, Text, View } from 'react-native';

export default function ScheduleScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>행사일정</Text>
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
