import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import IncrementBtn from './IncrementButton'

const Profile = ({ navigation, route, setParams }) => {
    const { data } = route.params
    const [count, setcount] = useState(0)

    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#009387"
        }}>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>headers</Text>
            </View>
            <View style={{
                flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30,
                paddingVertical: 50, paddingHorizontal: 30
            }}>
                <Text>headers</Text>
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