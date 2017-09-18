import React from 'react';
import { Text, View } from 'react-native';



const Header = () => {
    const {textStyle, viewStyle} = style;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Cool App Name</Text>
        </View>
    )
};

const style = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative',
        backgroundColor: '#f8f8f8'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;