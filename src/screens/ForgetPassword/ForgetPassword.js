import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView, TouchableOpacity, Keyboard, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import ButtonComp from '../../Components/ButttonComp'
import navigationStrings from '../../constants/navigationStrings'
import styles from '../ForgetPassword/styles'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePath from '../../constants/ImagePath'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const ForgetPassword = ({ navigation }) => {
    const [keyboardHeight, setKeyboardHeight] = useState(0)
    const [IsVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const keyBoardDidShow = Keyboard.addListener('keyboardDidShow', (event) => {
            console.log("Event triggred", event)
            setKeyboardHeight(event.endCoordinates.height - 79);
        })
        const keyBoardDidHide = Keyboard.addListener('keyboardDidHide', (event) => {
            console.log("Event triggred", event)
            setKeyboardHeight(0);
        })
        return () => {
            keyBoardDidShow.remove();
            keyBoardDidHide.remove();
        }
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.2 }}>
                        <Image style={styles.imageStyle} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/46-512.png' }} />
                    </View>
                    <View style={{ flex: 0.4 }}>
                        <Text style={styles.headingText}>Forget Password</Text>
                        <Text style={styles.textStyle}>Enter The Email Address associated with Your Account</Text>
                    </View>
                    <View style={{ flex: 0.4, marginBottom: keyboardHeight }}>
                        <TextInputWithLabel
                            label={'Email'}
                            placeholder="Enter Your password"
                            secureTextEntry={IsVisible}
                            onPressRight={() => { setIsVisible(!IsVisible) }}
                            rightIcon={IsVisible ? ImagePath.hideEye : ImagePath.showEye}
                            inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                            onChangeText={() => { }}
                        />
                        <ButtonComp
                            btnText={"Send"}
                            onPress={() => navigation.navigate(navigationStrings.FORGET_PASSWORD)}
                        />
                    </View>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default ForgetPassword
