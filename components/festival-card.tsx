import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

type FestivalStatus = 'ongoing' | 'ended';

interface FestivalCardProps {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    image: any;
    status: FestivalStatus;
}

export function FestivalCard({
    title,
    date,
    time,
    location,
    image,
    status,
}: FestivalCardProps) {
    const isOngoing = status === 'ongoing';

    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} resizeMode="cover" />
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <Text style={styles.subtitle}>Orangeplay_No. 23</Text>
                    <View
                        style={[
                            styles.badge,
                            isOngoing ? styles.badgeOngoing : styles.badgeEnded,
                        ]}
                    >
                        <Text style={styles.badgeText}>
                            {isOngoing ? '행사종료' : '축제중'}
                        </Text>
                    </View>
                </View>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.time}>{time}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: width - 40,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 400,
    },
    overlay: {
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    subtitle: {
        color: '#fff',
        fontSize: 14,
    },
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 6,
    },
    badgeOngoing: {
        backgroundColor: '#22c55e',
    },
    badgeEnded: {
        backgroundColor: '#9ca3af',
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    date: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 4,
    },
    time: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 4,
    },
    location: {
        color: '#fff',
        fontSize: 14,
    },
});
