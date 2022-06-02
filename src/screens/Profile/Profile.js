import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import IncrementBtn from './IncrementButton'

const Profile = ({ navigation, route, setParams }) => {
    const { data } = route.params
    const [count, setcount] = useState(0)

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            {/* {route.params.data ?
                <Text>{data.name}</Text>

                : <Text>Profile</Text>} */}
            <View>
                <Text>{count}</Text>
                <IncrementBtn count={count} incrementCount={(count) => { setcount(count) }} />
            </View>
        </SafeAreaView>
    )
}

export default Profile