import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MusicInfoButtonsProps {
    id: string;
}

export default function MusicInfoButtons({ id }: MusicInfoButtonsProps) {
    return (
        <View style={styles.actions}>
            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => router.push(`/festival-info/${id}` as any)}
            >
                <MaterialIcons name="info" size={20} color="#666" />
                <Text style={styles.actionText}>행사정보</Text>
            </TouchableOpacity>
            <View style={styles.verticalDivider} />
            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => router.push(`/music/${id}` as any)}
            >
                <MaterialIcons name="play-arrow" size={20} color="#666" />
                <Text style={styles.actionText}>음악재생</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    actions: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 8,
    },
    actionButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        gap: 8,
    },
    actionText: {
        color: '#666',
        fontSize: 14,
    },
    verticalDivider: {
        width: 1,
        backgroundColor: '#eee',
        marginVertical: 12,
    },
});
