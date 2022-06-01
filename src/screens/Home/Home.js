import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import dummyData from './dummyData'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constants/colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import styles from '../Home/styles';
import ButtonComp from '../../Components/ButttonComp';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../Redux/actions/auth';


const Home = ({ navigation }) => {
    const { token, success } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()


    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatStyle}>
                <View style={styles.flexView}>
                    <View>
                        <Text style={{
                            fontSize: moderateScale(12),
                            color: colors.blackOpacity80
                        }}>{item?.date}</Text>
                        <Text style={{
                            fontSize: moderateScale(12),
                            fontWeight: 'bold',
                            color: colors.black,
                            marginTop: moderateVerticalScale(8),
                        }} >{item?.name}</Text>
                        <Text style={{
                            fontSize: moderateScale(12),
                            color: colors.blackOpacity50,
                        }}><FontAwesome5 name='map-marker-alt' /> {item?.address}</Text>
                    </View>
                    <Image source={{ uri: "https://thumbs.dreamstime.com/b/user-profile-icon-creative-trendy-colorful-round-button-illustration-isolated-156511788.jpg" }}
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
                    <Text>{item?.price}</Text>
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
                                navigation.navigate("Profile", { data: data })
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
                    <TouchableOpacity onPress={() => dispatch(userLogout())}>
                        <FontAwesome5 size={20} color={colors.themeColor} name={'sign-out-alt'} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: moderateVerticalScale(10), marginHorizontal: moderateScale(16) }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dummyData}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => <View style={{ marginBottom: moderateVerticalScale(16) }} />}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Home
