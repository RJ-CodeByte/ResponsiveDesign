import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    imageStyle: {
        height: moderateScale(200),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: scale(32),
        color: "white",
        fontWeight: 'bold'
    },
    mainStyle: {
        paddingHorizontal: moderateScale(24),
        paddingTop: moderateVerticalScale(44)

    }, forgetView: {
        alignSelf: 'flex-end',
        marginVertical: moderateVerticalScale(24)
    }, forgetText: {
        fontSize: scale(16),
        color: colors.themeColor,
        fontWeight: '400'
    }, bottomView: {
        justifyContent: 'center',
        flexDirection: "row",
        margin: moderateVerticalScale(44)
    }, socialLoginStyle: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        // borderWidth: 1,
        shadowOffset: { width: 0, height: 0 },
        backgroundColor: '#FFFF',
        margin: moderateScale(2),
        padding: moderateScale(16),
        borderRadius: moderateScale(15),
    }

});
export default styles;