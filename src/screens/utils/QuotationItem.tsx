import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, withDelay } from 'react-native-reanimated';
import { Quote } from '../types/types';

interface QuoteItemProps {
    item: Quote;
}

const QuotationItem: React.FC<QuoteItemProps> = ({ item }) => {
    const [prevItem, setPrevItem] = useState<Quote | null>(null);
    const priceScale = useSharedValue(1);
    const bestBidPriceScale = useSharedValue(1);
    const bestAskPriceScale = useSharedValue(1);
    const bestAskSizeScale = useSharedValue(1);

    useEffect(() => {
        if (prevItem) {
            if (prevItem.price !== item.price) {
                priceScale.value = withSequence(
                    withTiming(1.1, { duration: 300 }),
                    withDelay(200, withTiming(1, { duration: 300 }))
                );
            }
            if (prevItem.bestBidPrice !== item.bestBidPrice) {
                bestBidPriceScale.value = withSequence(
                    withTiming(1.1, { duration: 300 }),
                    withDelay(200, withTiming(1, { duration: 300 }))
                );
            }
            if (prevItem.bestAskPrice !== item.bestAskPrice) {
                bestAskPriceScale.value = withSequence(
                    withTiming(1.1, { duration: 300 }),
                    withDelay(200, withTiming(1, { duration: 300 }))
                );
            }
            if (prevItem.bestAskSize !== item.bestAskSize) {
                bestAskSizeScale.value = withSequence(
                    withTiming(1.1, { duration: 300 }),
                    withDelay(200, withTiming(1, { duration: 300 }))
                );
            }
        }
        setPrevItem(item);
    }, [item]);

    const priceAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: priceScale.value }],
        };
    });

    const bestBidPriceAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: bestBidPriceScale.value }],
        };
    });

    const bestAskPriceAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: bestAskPriceScale.value }],
        };
    });

    const bestAskSizeAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: bestAskSizeScale.value }],
        };
    });

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Symbol:</Text>
                <Text style={styles.value}>{item.symbol}</Text>
            </View>
            <View style={styles.separator} />
            <Animated.View style={[styles.row, priceAnimatedStyle]}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.value}>{item.price}</Text>
            </Animated.View>
            <View style={styles.separator} />
            <Animated.View style={[styles.row, bestBidPriceAnimatedStyle]}>
                <Text style={styles.label}>Best Bid Price:</Text>
                <Text style={styles.value}>{item.bestBidPrice}</Text>
            </Animated.View>
            <View style={styles.separator} />
            <Animated.View style={[styles.row, bestAskPriceAnimatedStyle]}>
                <Text style={styles.label}>Best Ask Price:</Text>
                <Text style={styles.value}>{item.bestAskPrice}</Text>
            </Animated.View>
            <View style={styles.separator} />
            <Animated.View style={[styles.row, bestAskSizeAnimatedStyle]}>
                <Text style={styles.label}>Best Ask Size:</Text>
                <Text style={styles.value}>{item.bestAskSize}</Text>
            </Animated.View>
        </View>
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
