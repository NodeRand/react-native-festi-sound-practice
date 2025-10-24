import { Colors } from '@/constants/theme';
import { Image, StyleSheet, Text, View } from 'react-native';

export function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={require('@/assets/images/logo.png')}
                style={styles.logoImg}
                resizeMode="cover"
            />
            <Text style={styles.logoTextBox}>
                <Text style={styles.logoOrange}>FESTI </Text>
                <Text style={styles.logoBlack}>SOUND</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoImg: {
        width: 32,
        height: 32,
        borderRadius: 12,
    },
    logoTextBox: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    logoOrange: {
        color: Colors.light.tint,
    },
    logoBlack: {
        color: '#000',
    },
});
