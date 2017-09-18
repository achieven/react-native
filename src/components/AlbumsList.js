import React,  { Component } from 'react';
import { Text, View } from 'react-native';
import axios from  'axios';

class AlbumsList extends Component {
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
                (Response) => {
                    console.log(Response);
                }
        );
    }

    render() {
        return  (
                <View>
                    <Text>Albums list</Text>
                </View>
        );
    }

}

export default AlbumsList;