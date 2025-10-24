import HeaderNoTabs from '@/components/header-no-tabs';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function FestivalInfoScreen() {
    const { id } = useLocalSearchParams();
    return (
        <>
            {/* 헤더는 기본적으로 존재, 없애려면 아래와 같은 코드 적용 */}
            {/* <Stack.Screen options={{ headerShown: false }} /> */}
            {/* 헤더를 커스텀할 거면 아래와 같이 적용 */}
            <HeaderNoTabs text="행사 정보" />
            <View style={styles.container}>
                <Text style={styles.text}>행사정보 : {id}</Text>
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
