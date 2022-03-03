import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places)

    return (
        <FlatList 
            data={places} 
            renderItem={itemData => <PlaceItem 
                                        image={null}
                                        title={itemData.item.title}
                                        addres={null}
                                        onSelect={() => {
                                            props.navigation.navigate('PlaceDetail', {
                                                placeTitle: itemData.item.title,
                                                placeId: itemData.item.id
                                            })
                                        }} 
                                    />} 
        />
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Mapinhas',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Adicionar lugar' 
                    iconName='ios-add' 
                    onPress={() => {
                        navData.navigation.navigate('NewPlace');
                    }}
                    />
            </HeaderButtons>
    };
};

export default PlacesListScreen;