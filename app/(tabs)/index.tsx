import { FestivalCard } from '@/components/festival-card';
import { Header } from '@/components/header';
import MusicInfoButtons from '@/components/music-info-buttons';
import { Colors } from '@/constants/theme';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
    Dimensions,
    Linking,
    Pressable,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

const festivals = [
    {
        id: '1',
        title: '2025 울산불꽃축제',
        date: '2025년 10월 19일(일)',
        time: '18:00 ~ 20:40',
        location: '울산광역시 북구 강동몽돌해변',
        image: require('@/assets/images/partial-react-logo.png'),
        status: 'ongoing' as const,
    },
    {
        id: '2',
        title: '2025 하이원 레이저 불꽃쇼',
        date: '2025년 7월 26일(토)~12월 31일',
        time: '19:00 ~ 20:00',
        location: '하이원 그랜드호텔 잔디광장',
        image: require('@/assets/images/partial-react-logo.png'),
        status: 'ended' as const,
    },
];

export default function HomeScreen() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleScroll = (event: any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    return (
        <View style={styles.wrapper}>
            <Header />
            <View style={styles.container}>
                <Pressable
                    style={styles.bannerContainer}
                    onPress={() => Linking.openURL('https://www.festimap.kr')}
                >
                    <Image
                        style={styles.banner}
                        source={require('@/assets/images/banner.webp')}
                    />
                </Pressable>
                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    contentContainerStyle={styles.scrollContent}
                    decelerationRate="fast"
                >
                    {festivals.map(item => (
                        <Pressable
                            key={item.id}
                            style={styles.cardContainer}
                            onPress={() =>
                                router.push(`/festival-info/${item.id}` as any)
                            }
                        >
                            <FestivalCard {...item} />
                            <MusicInfoButtons id={item.id} />
                        </Pressable>
                    ))}
                </ScrollView>

                <View style={styles.pagination}>
                    {festivals.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                index === activeIndex && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        paddingTop: 30,
    },
    bannerContainer: { width: '100%', paddingHorizontal: 20, marginBottom: 20 },
    banner: {
        width: '100%',
        height: 80,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    scrollContent: {
        marginBottom: 20,
    },
    cardContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 20,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#d1d5db',
    },
    activeDot: {
        backgroundColor: Colors.light.tint,
    },
});
