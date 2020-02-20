import React from 'react';
//style
import { View } from 'react-native'
//screens
import MainScreen from "./src/screens/MainScreen";
//navigation
import { AppNavigation } from "./src/navigation/AppNavigation";

export default function App() {

    return(
        <AppNavigation>
            <View>
                <MainScreen />
            </View>
        </AppNavigation>
    )
}


