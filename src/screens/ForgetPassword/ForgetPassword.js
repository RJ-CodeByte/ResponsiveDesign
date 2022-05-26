import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ButtonComp from '../../Components/ButttonComp'
import navigationStrings from '../../constants/navigationStrings'
import styles from '../ForgetPassword/styles'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePath from '../../constants/ImagePath'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const ForgetPassword = ({ navigation }) => {
    const [isActive, setIsActive] = useState(false)
    const [IsVisible, setIsVisible] = useState(true);
    const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={{ flexWrap: 'wrap', backgroundColor:'red', height:60 }}>
                        {data.map((obj) => {
                            return (
                                <View>
                                    <Text>
                                        {obj}
                                    </Text>
                                </View>
                            )
                        })}
                        {/* <FlatList
                            data={data}
                            scrollEnabled={false}
                            style={{ backgroundColor: 'red', height: 50 }}
                            renderItem={({ item }) => (
                                <Text>{item}</Text>
                            )}
                        /> */}
                    </View>
                    {/* <Text style={styles.headingText}>Set Password</Text>
                    <Text style={styles.textStyle}>Set a password for your new account</Text>
                    <Text style={{ textAlign: "center", fontWeight: "bold" }} > (+33) 345678901</Text>
                    <TextInputWithLabel
                        label={'Password'}
                        placeholder="Enter Your password"
                        secureTextEntry={IsVisible}
                        onPressRight={() => { setIsVisible(!IsVisible) }}
                        rightIcon={IsVisible ? ImagePath.hideEye : ImagePath.showEye}
                        inputStyle={{ marginVertical: moderateVerticalScale(100) }}
                        onChangeText={() => { }}
                    />
                    <ButtonComp
                        img={ImagePath.arrow}
                        btnStyle={styles.btnStyle}
                        onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
                    /> */}
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView >
    )
}

export default ForgetPassword
