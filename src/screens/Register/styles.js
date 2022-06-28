import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '2%',
        paddingHorizontal: moderateScale(24),
    },
    headingText: {
        fontSize: scale(24),
        textTransform: 'uppercase',
        fontWeight: "bold",
        textAlign: 'center'
    },
    imageStyle: {
        height: moderateScale(150),
        width: moderateScale(150)
    },
    textStyle: {
        fontSize: scale(20),
        fontWeight: "400",
        marginTop: moderateVerticalScale(16)
    }, bottomView: { flexDirection: 'row', alignItems: 'center' }
})

export default styles;