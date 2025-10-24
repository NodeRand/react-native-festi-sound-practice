import { StyleSheet, Text, View } from 'react-native';

export default function FestivalInfoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>행사정보</Text>
        </View>
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
