import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from "../../src/navigation/ScreeenRouters";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

/** Экран "О приложении". */
const AboutScreen = () => {

    const navigation = useNavigation<BottomTabNavigationProp<any>>();

    return (
        <View style={styles.container}>
            <Text>О приложении</Text>
            <Button
                title="Перейти к котировкам"
                onPress={() => navigation.navigate(EScreens.QUOTATIONSSCREEN)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AboutScreen;
