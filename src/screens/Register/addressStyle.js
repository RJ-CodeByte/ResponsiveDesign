import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24),
    }, modal_container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000097',
        flex: 1
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