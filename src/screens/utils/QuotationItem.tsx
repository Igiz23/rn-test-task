import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, withDelay } from 'react-native-reanimated';
import { Quote } from '../types/types';

interface QuoteItemProps {
    item: Quote;
}

const QuotationItem: React.FC<QuoteItemProps> = ({ item }) => {
    const scale = useSharedValue(0.5);

    useEffect(() => {
        scale.value = withSequence(
            withTiming(1.1, { duration: 300 }),
            withDelay(200, withTiming(1, { duration: 300 }))
        );
    }, [item]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <View style={styles.row}>
                <Text style={styles.label}>Symbol:</Text>
                <Text style={styles.value}>{item.symbol}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.value}>{item.price}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
                <Text style={styles.label}>Best Bid Price:</Text>
                <Text style={styles.value}>{item.bestBidPrice}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
                <Text style={styles.label}>Best Ask Price:</Text>
                <Text style={styles.value}>{item.bestAskPrice}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
                <Text style={styles.label}>Best Ask Size:</Text>
                <Text style={styles.value}>{item.bestAskSize}</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#666',
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 8,
    },
});

export default QuotationItem;
