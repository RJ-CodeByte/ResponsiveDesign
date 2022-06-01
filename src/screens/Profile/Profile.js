import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Profile = ({ navigation, route, setParams }) => {
    const { data } = route.params

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            {route.params.data ?
                <Text>{data.name}</Text>

                : <Text>Profile</Text>}
        </SafeAreaView>
    )
}

export default Profile