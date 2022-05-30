import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import ButtonComp from '../../Components/ButttonComp'
import navigationStrings from '../../constants/navigationStrings'
import styles from '../Register/addressStyle'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePath from '../../constants/ImagePath'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const RegisterAddress = ({ navigation, route }) => {
    const [isActive, setIsActive] = useState(false)
    const { User } = route.params
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 1000)
    }, [])



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Modal
                visible={visible}
                transparent
                animationType='fade'
            >
                <View style={styles.modal_container}>
                    <ActivityIndicator color={'red'} />
                </View>
            </Modal >
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    <View style={{ flexDirection: 'row' }}>
                        <TextInputWithLabel
                            label={'First Name'}
                            placeholder="Enter Your first name"
                            inputStyle={{ flex: 1 }}
                            value={User.firstName}
                            keyboardType='email-address'
                            onChangeText={() => { }}
                        />
                        <View style={{ marginHorizontal: moderateScale(8) }} />
                        <TextInputWithLabel
                            label={'Last Name'}
                            placeholder="Enter Your last name"
                            inputStyle={{ flex: 1 }}
                            value={User.lastName}
                            keyboardType='email-address'
                            onChangeText={() => { }}
                        />
                    </View>
                    <TextInputWithLabel
                        label={'Date of Birth'}
                        placeholder="Enter Your Dob"
                        inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                        value={User.Dob}
                        keyboardType='email-address'
                        onChangeText={() => { }}
                    />
                    <TextInputWithLabel
                        label={'Phone Number'}
                        placeholder="Enter Your last name"
                        inputStyle={{ marginBottom: moderateVerticalScale(20) }}
                        value={User.contact}
                        keyboardType='email-address'
                        onChangeText={() => { }}
                    />
                    <TextInputWithLabel
                        label={'Email'}
                        placeholder="Enter Your last name"
                        inputStyle={{ marginBottom: moderateVerticalScale(20) }}
                        value={User.email}
                        keyboardType='email-address'
                        onChangeText={() => { }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <TextInputWithLabel
                            label={'Country'}
                            placeholder="Enter Your Country"
                            inputStyle={{ flex: 1 }}
                            keyboardType='email-address'
                            onChangeText={() => { }}
                        />
                        <View style={{ marginHorizontal: moderateScale(8) }} />
                        <TextInputWithLabel
                            label={'PostalZip Code'}
                            placeholder="Enter Your PostalZip Code"
                            inputStyle={{ flex: 1 }}
                            keyboardType='email-address'
                            onChangeText={() => { }}
                        />
                    </View>
                    <TextInputWithLabel
                        label={'Address'}
                        placeholder="Enter Your Address"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                        keyboardType='email-address'
                        onChangeText={() => { }}
                    />
                    <TextInputWithLabel
                        label={'Referral Code'}
                        placeholder="Enter Your Referral Code"
                        inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                        keyboardType='email-address'
                        onChangeText={() => { }}
                    />
                    <TouchableOpacity activeOpacity={0.8} style={styles.bottomView} onPress={() => { setIsActive(!isActive) }}>
                        <FontAwesome5 size={20} solid={!!isActive} style={{ marginRight: moderateScale(12) }} name={isActive ? ImagePath.activeCheck : ImagePath.inactiveCheck} />
                        <Text>By logging in, you agree to NOOVOO's Privacy Policy and Terms of Use</Text>
                    </TouchableOpacity>
                    <ButtonComp
                        btnText={'Continue'}
                        btnStyle={{
                            width: '100%',
                            marginVertical: moderateVerticalScale(20)
                        }}
                        onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView >
    )
}

export default RegisterAddress
