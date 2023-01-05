import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

const Splash = () => {
    const navigation = useNavigation();

    const myAnimation = () => {
        return (
            <Lottie
                source={require('../../QR.json')}
                autoPlay
                loop={false}
                speed={1}
                onAnimationFinish={() => {
                    navigation.navigate("Home");
                }}
            />
        );
    };

    return (
        <View style={styles.background}>
            {myAnimation()}
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
})

export default Splash;