import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

import Colors from '../constants/Colors';
import MapPreview from './MapPreview';

const LocationPicker = props => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();

    const verifyPermissions = async () => {
        const result =  await Location.requestForegroundPermissionsAsync();
        if (result.status !== 'granted') {
            Alert.alert('Permissão negada!');
            return false;
        };

        return true;
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }

        try {
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
            console.log(location);
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
        } catch (err) {
            Alert.alert('Não foi possível obter a localização!');
            throw err;
        }
        setIsFetching(false);

    };

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation}>
                {isFetching ? (
                    <ActivityIndicator size={'large'} color={Colors.primary}/>
                ) : (
                    <Text>Nenhuma localização definida.</Text>
                )}
            </MapPreview>
            <Button 
                title='Localizar' 
                onPress={getLocationHandler}
                color={Colors.primary}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1
    }
});

export default LocationPicker;