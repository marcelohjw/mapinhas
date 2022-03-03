import React from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';

const ImgPicker = props => {

    const verifyPermissions = async () => {
        const result =  await Permissions.askAsync(Permissions.CAMERA);
        if (result.status !== 'granted') {
            Alert.alert('Permissão negada!');
            return false;
        };

        return true;
    };

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        ImagePicker.launchCameraAsync();
    };

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                <Text>Nenhuma foto definida.</Text>
                <Image style={styles.image} />
            </View>
            <Button 
                title='Tirar foto' 
                color={Colors.primary} 
                onPress={takeImageHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default ImgPicker;