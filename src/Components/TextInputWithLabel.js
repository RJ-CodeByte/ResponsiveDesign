import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import colors from '../constants/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const TextInputWithLabel = ({
    label,
    placeholder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    error,
    onPressRight,
    ...props
}) => {
    return (
        <View style={{ ...inputStyle }}>
            <View style={{ ...styles.inputStyle }}>
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
                            {/* <Image source={rightIcon} style={{ tintColor: colors.blackOpacity03 }} /> */}
                            <FontAwesome5 name={rightIcon} size={20} style={{ color: colors.blackOpacity03 }} />
                        </TouchableOpacity>}
                </View>
            </View>
            {!!error && <Text style={{ color: "red" }}>{error}</Text>}
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