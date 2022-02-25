import React from 'react';
import { View, Text } from 'react-native';

const PlacesListScreen = props => {
    return (
        <View>
            <Text>Detalhes</Text>
        </View>
    );
};

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    };
};

export default PlacesListScreen;