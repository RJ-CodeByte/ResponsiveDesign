import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Dimensions,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import React, { useState } from 'react';
import styles from './styles';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import ImagePath from '../../constants/ImagePath'
import ButtonComp from '../../Components/ButttonComp';
import Constants from '../../constants/navigationStrings'

const Login = ({ navigation }) => {

    const [IsVisible, setIsVisible] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };


    const validation = () => {
        if (email.length == 0) {
            setEmailError("Email can not be empty")
        }
        else if (!validateEmail(email)) {
            setEmailError("Email is Not Valid")
        }
        else {
            setEmailError("")
        }
        if (password.length == 0) {
            setPasswordError("Password can not be empty")
        } else if (password.length <= 4) {
            setPasswordError("Password must be greater then 4")
        }
        else {
            setPasswordError("")
        }
    }



    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                <ImageBackground
                    style={styles.imageStyle}
                    source={{
                        uri: 'https://store-images.s-microsoft.com/image/apps.58868.14403833510503142.72a67ef8-3805-4e1b-9ff0-41a3646fd28a.72151330-72d0-4d1f-91c0-02cafe1e9f4b?mode=scale&q=90&h=1080&w=1920',
                    }}>
                    <Text style={styles.textStyle}>LOGIN</Text>
                </ImageBackground>
                <View style={styles.mainStyle}>
                    <TextInputWithLabel
                        label={'Email Address'}
                        placeholder="Enter Your email"
                        autoCapitalize={'none'}
                        inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                        keyboardType='email-address'
                        onChangeText={(email) => { setEmail(email) }}
                        error={emailError}
                    />
                    <TextInputWithLabel
                        label={'Password'}
                        placeholder="Enter Your password"
                        secureTextEntry={IsVisible}
                        onPressRight={() => { setIsVisible(!IsVisible) }}
                        rightIcon={IsVisible ? ImagePath.hideEye : ImagePath.showEye}
                        onChangeText={(password) => { setPassword(password) }}
                        error={passwordError}
                    />
                    <TouchableOpacity style={styles.forgetView} onPress={() => navigation.navigate(Constants.FORGET_PASSWORD)} activeOpacity={0.7}>
                        <Text style={styles.forgetText}>Forget Password ?</Text>
                    </TouchableOpacity>
                    <ButtonComp
                        btnText={"Login"}
                        onPress={validation}
                    />
                </View>

            </TouchableOpacity>
            <View style={styles.bottomView}>
                <Text>Not A Member? </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate(Constants.CHOOSE_ACCOUNT) }}><Text style={{ fontWeight: 'bold' }}>Join Now</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;


