import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import React, { useState } from 'react';
import styles from './styles';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import ImagePath from '../../constants/ImagePath'
import ButttonComp from '../../Components/ButttonComp';
import Constants from '../../constants/navigationStrings'

const Login = ({ navigation }) => {

    const [IsVisible, setIsVisible] = useState(true);

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
                        inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                        keyboardType='email-address'
                        onChangeText={() => { }}
                    />
                    <TextInputWithLabel
                        label={'Password'}
                        placeholder="Enter Your password"
                        secureTextEntry={IsVisible}
                        onPressRight={() => { setIsVisible(!IsVisible) }}
                        rightIcon={IsVisible ? ImagePath.hideEye : ImagePath.showEye}
                        onChangeText={() => { }}
                    />
                    <TouchableOpacity style={styles.forgetView} onPress={() => navigation.navigate(Constants.FORGET_PASSWORD)} activeOpacity={0.7}>
                        <Text style={styles.forgetText}>Forget Password ?</Text>
                    </TouchableOpacity>
                    <ButttonComp
                        btnText={"Login"}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.bottomView}>
                <Text>Not A Member? </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate(Constants.REGISTER) }}><Text style={{ fontWeight: 'bold' }}>Join Now</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;


