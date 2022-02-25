import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

import Colors from '../constants/Colors';

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');

    const titleChangeHandler = text => {
        // Validação aqui
        setTitleValue(text);
    };

    const savePlaceHandler = () => {
        Alert.alert(titleValue);
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