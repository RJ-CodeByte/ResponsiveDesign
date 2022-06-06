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
import React, { useState, useEffect } from 'react';
import styles from './styles';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import ImagePath from '../../constants/ImagePath'
import ButtonComp from '../../Components/ButttonComp';
import Constants from '../../constants/navigationStrings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import { loginFirebaseUser, onGoogleButtonPress, userLogin } from '../../Redux/actions/auth';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SnackBar from 'react-native-snackbar-component';

const Login = ({ navigation }) => {


    const { isLoading } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const [IsVisible, setIsVisible] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '321735861258-50dtq7v8l77qrt2fo5te2cde52cpjb56.apps.googleusercontent.com',
            offlineAccess: true,
        })
        console.log(isLoading)
    }, [])



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
            return false;
        }
        return true;
    }


    const logeedIn = async () => {
        console.log("asda" + JSON.stringify(validation()));
        if (!validation()) { dispatch(loginFirebaseUser(email, password)) }

    }

    const socialLogeedIn = async () => {
        // dispatch(userLogin(email, password)),
        dispatch(onGoogleButtonPress())
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
                        onPress={logeedIn}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: moderateVerticalScale(50) }}>
                    <View style={{ flexDirection: "row", flex: 0.5 }}>
                        <TouchableOpacity style={styles.socialLoginStyle} onPress={socialLogeedIn} >
                            <FontAwesome5 name={'google'} size={50} solid={true} color={'#20bf6b'} />
                        </TouchableOpacity >
                    </View>
                    <View>
                        <TouchableOpacity style={styles.socialLoginStyle} >
                            <FontAwesome5 name={'facebook'} size={50} solid={true} color={'#45aaf2'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity >
            <SnackBar visible={isLoading} autoHidingTime={1000} textMessage="Login Success" />
            <View style={styles.bottomView}>
                <Text>Not A Member? </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate(Constants.CHOOSE_ACCOUNT) }}><Text style={{ fontWeight: 'bold' }}>Join Now</Text></TouchableOpacity>
            </View>
        </View >
    );
};

export default Login;


