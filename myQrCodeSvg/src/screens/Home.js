import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    BackHandler,
    Dimensions,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import { Button } from 'native-base';
import QRCode from 'react-native-qrcode-svg';

const Home = () => {
    const [value, setValue] = useState("");
    const [isErr, setIsErr] = useState(false);
    const [isCreateScreen, setIsCreateScreen] = useState(true);

    const windowHeight = Dimensions.get('window').height;

    const ExitApp = () => {
        BackHandler.exitApp();
    };

    function handleExitButton() {
        ExitApp();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleExitButton);
        return () => {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                handleExitButton,
            );
        };
    }, []);

    useEffect(() => {
        if (value.length != 0) {
            setIsErr(false);
        }
    }, [value])

    const MyQrCode = () => {
        return (
            <QRCode
                value={value}
                size={windowHeight * 0.3}
            />
        );
    }

    const CreateQrCode = () => {
        if (isCreateScreen) {
            return (
                <View style={styles.myMainContainer}>
                    <View style={styles.myContainer1}>
                        <Text style={{
                            width: '70%',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            color: isErr == true ? 'red' : 'black',
                            margin: 3,
                            fontSize: 19,
                            fontWeight: 'bold'
                        }}>
                            Qr Code Url
                        </Text>
                        <TextInput
                            style={[styles.myInput, {
                                color: isErr == true ? 'red' : 'black',
                                borderColor: isErr == true ? 'red' : 'black'
                            }]}
                            placeholderTextColor={isErr == true ? 'red' : 'black'}
                            placeholder={"Url is here!"}
                            value={value}
                            returnKeyType={'done'}
                            onChangeText={text => setValue(text)}
                        />
                    </View>
                    <View style={styles.myContainer2}>
                        <Button style={styles.myButton} onPress={() => {
                            if (value.length == 0) {
                                setIsErr(true);
                            } else {
                                setIsCreateScreen(false);
                            }
                        }}>
                            Create Qr Code
                        </Button>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.myMainContainer}>
                    <View style={styles.myContainer1}>
                        {MyQrCode()}
                    </View>
                    <View style={styles.myContainer2}>
                        <Button style={styles.myButton} onPress={() => {
                            setValue("");
                            setIsCreateScreen(true);
                        }}>
                            Turn Back
                        </Button>
                    </View>
                </View>
            );
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.background}>
                {CreateQrCode()}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#D1F2EB',
    },
    myMainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    myContainer1: {
        width: '90%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myContainer2: {
        width: '90%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myInput: {
        width: '70%',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 5,
        margin: 3
    },
    myButton: {
        borderRadius: 10,
    }
});

export default Home;