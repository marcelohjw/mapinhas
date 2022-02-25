import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPlaceScreen = props => {
    return (
        <View style={styles.centered}>
            <Text>Tela de adicionar lugar!</Text>
        </View>
    );
};

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Adicionar Lugar'
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default NewPlaceScreen;