import React, { useEffect } from 'react';
import {View, Text, FlatList, StyleSheet, Button, ActivityIndicator} from 'react-native';
import { observer } from 'mobx-react';
import { EScreens } from "../../src/navigation/ScreeenRouters";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import QuotationItem from './utils/QuotationItem';
import { quotationStore } from './store/store';
import { Quote } from './types/types';

/** Экран "Котировки". */
const QuotationsScreen = observer(() => {

    const navigation = useNavigation<BottomTabNavigationProp<any>>();
    const isFocused = useIsFocused();

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isFocused) {
            quotationStore.fetchQuotes();
            interval = setInterval(quotationStore.fetchQuotes, 5000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isFocused]);

    return (
        <View style={styles.container}>
            {(quotationStore.error || quotationStore.loading) && <ActivityIndicator size="large" color="#00ff00" />}
            {quotationStore.error && <Text style={styles.error}>{quotationStore.error}</Text>}
            <FlatList
                data={quotationStore.quotes}
                keyExtractor={(item: Quote) => item.symbol}
                renderItem={({ item}) => (
                    <QuotationItem item={item} />
                )}
            />
            <Button
                title="Перейти к О приложении"
                onPress={() => navigation.navigate(EScreens.ABOUTSCREEN)}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
    },
    error: {
        color: '#ff0000',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default QuotationsScreen;
