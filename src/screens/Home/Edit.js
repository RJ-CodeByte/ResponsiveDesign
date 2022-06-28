import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import ButtonComp from '../../Components/ButttonComp'
import navigationStrings from '../../constants/navigationStrings'
import styles from '../Register/styles'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePath from '../../constants/ImagePath'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { registeracess, registerFirebaseUser } from '../../Redux/actions/auth'
import SQLite from 'react-native-sqlite-storage'
import { useDispatch } from 'react-redux'



if (Platform.OS == 'ios') {
    const db = SQLite.openDatabase(
        {
            name: 'MainDB.db',
            location: 'Library'
        },
        () => { },
        error => { console.log("errorrrrrrr", error) }
    );
} else {
    const db = SQLite.openDatabase(
        {
            name: 'MainDB.db',
            location: 'default'
        },
        () => { },
        error => { console.log("errorrrrrrr", error) }
    );
}

const Edit = ({ navigation, route }) => {
    const [isActive, setIsActive] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [Dob, setDob] = useState('')
    const [contact, setContact] = useState(0)
    const [data, setData] = useState({})

    const [IsVisible, setIsVisible] = useState(true);
    const dispatch = useDispatch()
    const { id } = route.params

    useEffect(() => {
        console.log(id)
        getData(id);
    }, [])



    const getData = async (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM Users Where ID=${id}`,
                [],
                (tx, result) => {
                    // var len = result.rows.length;
                    // console.log(len);
                    var user;
                    // let newData = []
                    // if (len > 0) {
                    //     for (let index = 0; index < len; index++) {
                    user = result.rows.item(0);
                    // newData.push(user)
                    console.log({ user })
                    //     }
                    setFirstName(user.Name)
                    setDob(user.Dob)
                    setContact(JSON.stringify(user.Contact))
                    setEmailAddress(user.Email)
                    // setData(user);
                    // }
                    // console.log(result.rows.item(0));
                }
            )
        })
    }


    const EditData = async () => {
        try {
            await db.transaction(async (tx) => {
                await tx.executeSql(
                    `UPDATE Users SET Name=?,Email=?,Dob=?,Contact=? WHERE ID=${id}`,
                    [firstName, email, Dob, contact],
                    (result) => {
                        console.log(result)
                    }
                )
            })
            alert("Data Updated SuccessFully")
            navigation.goBack();
        }
        catch (err) {
            console.log("Error" + err);
        }
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.container}>

                    <View style={{ flexDirection: 'row' }}>
                        <TextInputWithLabel
                            label={'First Name'}
                            placeholder="Enter Your first name"
                            value={firstName}
                            // defaultValue={data.Name}
                            inputStyle={{ flex: 1 }}
                            keyboardType='email-address'
                            onChangeText={(fname) => { setFirstName(fname) }}
                        />
                        <View style={{ marginHorizontal: moderateScale(8) }} />
                        {/* <TextInputWithLabel
                            label={'Last Name'}
                            placeholder="Enter Your last name"
                            inputStyle={{ flex: 1 }}
                            keyboardType='email-address'
                            onChangeText={(lname) => { setLastName(lname) }}
                        /> */}
                    </View>
                    {/* <TextInputWithLabel
                        label={'Salon Name'}
                        placeholder="Enter Your last name"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                        keyboardType='email-address'
                        onChangeText={() => { }}
                    /> */}
                    <TextInputWithLabel
                        label={'Date of Birth'}
                        value={Dob}
                        placeholder="Enter Your DOB"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                        onChangeText={(dob) => { setDob(dob) }}
                    />
                    <TextInputWithLabel
                        label={'Phone Number'}
                        placeholder="Enter Your Phone Number"
                        value={contact}
                        // defaultValue={JSON.stringify(data.Contact)}
                        inputStyle={{ marginBottom: moderateVerticalScale(20) }}
                        keyboardType='number-pad'
                        onChangeText={(number) => { setContact(number) }}
                    />
                    <TextInputWithLabel
                        label={'Email'}
                        value={email}
                        // defaultValue={data.Email}
                        placeholder="Enter Your Email Address"
                        inputStyle={{ marginBottom: moderateVerticalScale(20) }}
                        keyboardType='email-address'
                        autoCapitalize={'none'}
                        onChangeText={(email) => { setEmailAddress(email) }}
                    />
                    {/* <TextInputWithLabel
                        label={'Password'}
                        placeholder="Enter Your password"
                        secureTextEntry={IsVisible}
                        onPressRight={() => { setIsVisible(!IsVisible) }}
                        inputStyle={{ marginBottom: moderateVerticalScale(20) }}
                        rightIcon={IsVisible ? ImagePath.hideEye : ImagePath.showEye}
                        // inputStyle={{ marginVertical: moderateVerticalScale(100) }}
                        onChangeText={(password) => { setPassword(password) }}
                    /> */}
                    {/* <View style={{ flexDirection: 'row' }}>
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
                    /> */}
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
                        onPress={
                            EditData
                            // registerFirebaseUser(email, password).then(() => navigation.navigate(navigationStrings.LOGIN));
                            // var user = {
                            //     firstName: firstName,
                            //     lastName: lastName,
                            //     Dob: Dob,
                            //     contact: contact,
                            //     email: email,
                            // }
                            // navigation.navigate(navigationStrings.RegisterAddress, { User: user })
                        }
                    />
                </View>
            </KeyboardAwareScrollView >
        </SafeAreaView >
    )
}

export default Edit
