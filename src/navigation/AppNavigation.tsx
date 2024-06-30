import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/AboutScreen';
import QuotationsScreen from '../screens/QuotationsScreen';
import { EScreens } from '../../src/navigation/ScreeenRouters';


/** Интерфейс для экранов. */
export interface IScreensProps {
    /** Имя экрана. */
    name: EScreens | string;
    /** Компонент. */
    component: FC;
}

/** Опции для всех экранов. */
export const MasterScreenOptions: IScreensProps[] = [
    /** Экран о приложении. */
    {
        name: EScreens.ABOUTSCREEN,
        component: AboutScreen,
    },
    /** Экран котировок. */
    {
        name: EScreens.QUOTATIONSSCREEN,
        component: QuotationsScreen,
    },
];

const Tab = createBottomTabNavigator<any>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                {MasterScreenOptions.map(({ name, component }) => (
                    <Tab.Screen key={`app-screen-${name}`} name={name} component={component} />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
