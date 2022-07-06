import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import IncrementBtn from './IncrementButton'
import { useSelector } from 'react-redux'
import colors from '../../constants/colors'
import { scale } from 'react-native-size-matters'

const Profile = ({ navigation, route, setParams }) => {
    const { data } = route.params
    const [count, setcount] = useState(0)
    const { userInfo } = useSelector(state => state.userReducer)
    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#009387"
        }}>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>{userInfo.displayName}</Text>
            </View>
            <View style={{
                flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30,
                paddingVertical: 50, paddingHorizontal: 20
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <Image source={{ uri: userInfo?.picture?.data?.url ?? userInfo.photoURL }} style={{ width: 100, height: 100 }} />
                    <View >
                        <Text style={{ fontWeight: '700', color: colors.black, fontSize: scale(20) }}>{`${userInfo?.first_name ?? ''} ${userInfo?.last_name ?? ''}`}{userInfo.displayName}</Text>
                        <Text style={{ fontWeight: '400', color: colors.blackOpacity50, fontSize: scale(15) }}>{userInfo.email}</Text>
                    </View>
                </View>
            </View>

            {/* {route.params.data ?
                <Text>{data.name}</Text>

                : <Text>Profile</Text>} */}
            {/* <View>
                <Text>{count}</Text>
                <IncrementBtn count={count} incrementCount={(count) => { setcount(count) }} />
            </View> */}
        </SafeAreaView>
    )
}

export default Profile