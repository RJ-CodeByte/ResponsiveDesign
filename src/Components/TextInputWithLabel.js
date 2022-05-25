import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import colors from '../constants/colors'


const TextInputWithLabel = ({
    label,
    placeholder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    onPressRight,
    ...props
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <Text style={styles.labelStyle}>{label}</Text>
            <View style={styles.flexView}>
                <TextInput
                    style={styles.inlineStyle}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    {...props}
                />
                {!!rightIcon &&
                    <TouchableOpacity onPress={onPressRight} activeOpacity={0.8} >
                        <Image source={rightIcon} style={{ tintColor: colors.blackOpacity03 }} />
                    </TouchableOpacity>}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        borderRadius: moderateScale(4)
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inlineStyle: {
        paddingVertical: moderateVerticalScale(8),
        fontSize: scale(16),
        color: colors.blackOpacity80,
        flex: 1
    },
    labelStyle: {
        fontSize: scale(14),
        color: colors.blackOpacity50
    }
})
export default TextInputWithLabel