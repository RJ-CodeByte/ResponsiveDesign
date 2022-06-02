import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../constants/colors';


const IncrementBtn = ({
    count,
    incrementCount
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => incrementCount(count+1)}
            style={{ ...styles.btnStyle }}>
            <Text style={{ ...styles.btnTextStyle }}>+</Text>
        </TouchableOpacity>
    )
}

export default IncrementBtn

const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(48),
        backgroundColor: colors.themeColor,
        borderRadius: moderateScale(4),
        alignItems: "center",
        justifyContent: 'center'
    },
    btnTextStyle: {
        fontSize: scale(12),
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})