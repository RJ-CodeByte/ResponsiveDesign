import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import dummyData from './dummyData'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constants/colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import styles from '../Home/styles';
import ButtonComp from '../../Components/ButttonComp';
import { useSelector, useDispatch } from 'react-redux';
import { userList, userLogout } from '../../Redux/actions/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import SQLite from 'react-native-sqlite-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';


// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default'
//     },
//     () => { },
//     error => { console.log(error) }
// );

const HomeLocal = ({ navigation }) => {
    const { users } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    // const [data, setData] = useState([])

    useEffect(() => {
        dispatch(userList())
    }, [])

    const logOut = () => {
        dispatch(userLogout());
        // navigation.replace("Login")
        alert('Your are signed out!');
        // console.log('users', token)
    }



    // const getData = async () => {
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //             "SELECT * FROM Users",
    //             [],
    //             (tx, result) => {
    //                 var len = result.rows.length;
    //                 console.log(len);
    //                 var user;
    //                 let newData = []
    //                 if (len > 0) {
    //                     for (let index = 0; index < len; index++) {
    //                         user = result.rows.item(index);
    //                         newData.push(user)
    //                         console.log(newData)
    //                     }
    //                     setData(newData);
    //                 }
    //             }
    //         )
    //     })
    // }


    // const deleteData = async (id) => {
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //             `DELETE FROM Users Where ID=${id}`,
    //             [],
    //             () => { alert("Data Deleted SuccessFully"), navigation.navigate("Home") },
    //             error => { console.log(error) }
    //         )
    //     })
    // }



    // await GoogleSignin.revokeAccess().then(() => console.log("Log Out"));
    // await GoogleSignin.signOut().then(() => console.log("Log Out"));
    const GooglesignIncancled = async () => {
        try {
            await GoogleSignin.revokeAccess().then(() => console.log("Log Out"));
            await GoogleSignin.signOut().then(() => console.log("Log Out"));
            dispatch(userLogout());
            alert('Your are signed out!');
            console.log('users', token)

        } catch (error) {
            console.error(error);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatStyle}>
                <View style={styles.flexView}>
                    <View>
                        <Text style={{
                            fontSize: moderateScale(12),
                            color: colors.blackOpacity80
                        }}>{item?.email}</Text>
                        <Text style={{
                            fontSize: moderateScale(12),
                            fontWeight: 'bold',
                            color: colors.black,
                            marginTop: moderateVerticalScale(8),
                        }} >{item?.first_name}</Text>
                        {/* <Text style={{
                            fontSize: moderateScale(12),
                            color: colors.blackOpacity50,
                        }}><FontAwesome5 name='map-marker-alt' /> {item?.last_name}</Text> */}
                    </View>
                    <Image source={{ uri: !!item.avatar ? item.avatar : "https://thumbs.dreamstime.com/b/user-profile-icon-creative-trendy-colorful-round-button-illustration-isolated-156511788.jpg" }}
                        style={{
                            width: moderateScale(64),
                            height: moderateScale(64),
                        }}
                    />
                </View>
                <View style={{ ...styles.flexView, marginVertical: moderateVerticalScale(8) }}>
                    <Text style={{
                        fontSize: moderateScale(14),
                        color: colors.blackOpacity50,
                        textTransform: 'uppercase'
                    }}>price</Text>
                    <Text>{item?.price ?? 30}</Text>
                </View>
                <View style={styles.flexView}>
                    <View style={{ flex: 1 }}>
                        <ButtonComp
                            btnText={"reject"}
                            btnStyle={{
                                borderWidth: 1,
                                backgroundColor: colors.white,
                                borderColor: colors.themeColor
                            }}
                            onPress={() => {
                                // console.log("ID " + item.ID)
                                // deleteData(item.ID)
                                // navigation.navigate("Register")
                            }}
                            btnTextStyle={{
                                color: colors.themeColor
                            }}
                        />
                    </View>
                    <View style={{ marginHorizontal: moderateScale(8) }} />
                    <View style={{ flex: 1 }}>
                        <ButtonComp
                            btnText={"Accept"}
                            onPress={() => {
                                var data = {
                                    date: item?.date,
                                    name: item?.name,
                                    address: item?.address,
                                }
                                navigation.navigate("Register")
                            }}
                        />
                    </View>

                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={styles.headerStyle}>
                    {/* <Text  /> */}
                    <View />
                    <Text style={styles.headerText}>Nanny Line</Text>
                    <TouchableOpacity onPress={logOut}>
                        <FontAwesome5 size={20} color={colors.themeColor} name={'sign-out-alt'} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: moderateVerticalScale(10), marginHorizontal: moderateScale(16) }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={users}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => <View style={{ marginBottom: moderateVerticalScale(16) }} />}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeLocal
