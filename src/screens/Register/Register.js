import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
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


const errorCB = (err) => {
    console.log("SQL Error: " + err);
};

const successCB = () => {
    console.log("SQL executed fine");
};

const openCB = () => {
    console.log("Database OPENED");
};
// if (Platform.OS == 'ios') {
//     const db = SQLite.openDatabase(
//         {
//             name: 'MainDB.db',
//             location: 'Library'
//         },
//         () => { },
//         error => { console.log("errorrrrrrr", error) }
//     );
// } else {
const db = SQLite.openDatabase(
    {
        name: 'MainDB.db',
        location: 'default'
    },
    () => { },
    error => { console.log("errorrrrrrr", error) }
);
// }

const Register = ({ navigation }) => {
    const [isActive, setIsActive] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [Dob, setDob] = useState('')
    const [contact, setContact] = useState(0)
    const [IsVisible, setIsVisible] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        createTable();
    }, [])



    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT, Dob TEXT, Contact BIGINT);"
            )
        })
    }



    const setData = async () => {
        try {
            await db.transaction(async (tx) => {
                await tx.executeSql(
                    "INSERT INTO Users (Name, Email, Dob, Contact) VALUES (?,?,?,?)",
                    [firstName, email, Dob, contact]
                )
            })
            console.log("addeddd")
            dispatch(registeracess())
            navigation.replace('DrawerStack');
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
                            inputStyle={{ flex: 1 }}
                            keyboardType='email-address'
                            onChangeText={(fname) => { setFirstName(fname) }}
                        />
                        <View style={{ marginHorizontal: moderateScale(8) }} />
                        <TextInputWithLabel
                            label={'Last Name'}
                            placeholder="Enter Your last name"
                            inputStyle={{ flex: 1 }}
                            keyboardType='email-address'
                            onChangeText={(lname) => { setLastName(lname) }}
                        />
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
                        placeholder="Enter Your DOB"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                        onChangeText={(dob) => { setDob(dob) }}
                    />
                    <TextInputWithLabel
                        label={'Phone Number'}
                        placeholder="Enter Your last name"
                        inputStyle={{ marginBottom: moderateVerticalScale(20) }}
                        keyboardType='number-pad'
                        onChangeText={(number) => { setContact(number) }}
                    />
                    <TextInputWithLabel
                        label={'Email'}
                        placeholder="Enter Your Email Address"
                        inputStyle={{ marginBottom: moderateVerticalScale(20) }}
                        keyboardType='email-address'
                        autoCapitalize={'none'}
                        onChangeText={(email) => { setEmailAddress(email) }}
                    />
                    <TextInputWithLabel
                        label={'Password'}
                        placeholder="Enter Your password"
                        secureTextEntry={IsVisible}
                        onPressRight={() => { setIsVisible(!IsVisible) }}
                        inputStyle={{ marginBottom: moderateVerticalScale(20) }}
                        rightIcon={IsVisible ? ImagePath.hideEye : ImagePath.showEye}
                        // inputStyle={{ marginVertical: moderateVerticalScale(100) }}
                        onChangeText={(password) => { setPassword(password) }}
                    />
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
                            setData
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

export default Register
