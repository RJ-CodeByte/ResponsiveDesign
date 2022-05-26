import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24)
    },
    headingText: {
        fontSize: scale(24),
        marginTop: moderateVerticalScale(88),
        fontWeight: "bold",
        textAlign: 'center'
    },
    textStyle: {
        fontSize: scale(14),
        fontWeight: "300",
        textAlign: 'center',
        marginVertical: moderateVerticalScale(12),
    }, btnStyle: {
        width: moderateScale(56),
        height: moderateScale(56),
        borderRadius: moderateScale(30),
        alignSelf: 'flex-end'
    },
})

export default styles;