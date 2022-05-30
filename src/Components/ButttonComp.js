import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import colors from '../constants/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const ButtonComp = ({
    btnStyle,
    btnText,
    img,
    onPress = () => { },
    btnTextStyle= {},
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{ ...styles.btnStyle, ...btnStyle }}>
            {!!img && <FontAwesome5 size={20} style={{ paddingVertical: moderateScale(25) }} color='white' name={img} />}
            <Text style={{...styles.btnTextStyle,...btnTextStyle}}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComp

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