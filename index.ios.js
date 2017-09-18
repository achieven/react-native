import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from  './src/components/header';
import AlbumsList from  './src/components/AlbumsList';

const App = () => {
    return (
            <View>
                <Header/>
                <AlbumsList/>
            </View>
    );
};


AppRegistry.registerComponent('albums1', () => App);