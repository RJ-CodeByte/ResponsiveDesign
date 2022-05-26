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
    },
    imageStyle: {
        width: moderateScale(100),
        height: moderateScale(200),
        alignSelf: 'center'
    }
})

export default styles;