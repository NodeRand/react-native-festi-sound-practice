import { Header } from '@/components/Header';
import { FestivalCard } from '@/components/festival-card';
import MusicInfoButtons from '@/components/music-info-buttons';
import { useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

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
        <View style={styles.container}>
            <Header />

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
                    <View key={item.id} style={styles.cardContainer}>
                        <FestivalCard {...item} />
                        <MusicInfoButtons id={item.id} />
                    </View>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        paddingVertical: 20,
    },
    cardContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
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
        backgroundColor: '#ef4444',
    },
});
