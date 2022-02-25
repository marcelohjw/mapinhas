import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        // Validação aqui
        setTitleValue(text);
    };

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue));
        props.navigation.navigate('Places');
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={titleChangeHandler}
                    value={titleValue}
                />
                <Button 
                    title='Salvar' 
                    color={Colors.primary} 
                    onPress={savePlaceHandler}
                />
            </View>
        </ScrollView>
    );
};

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Adicionar Lugar'
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlaceScreen;