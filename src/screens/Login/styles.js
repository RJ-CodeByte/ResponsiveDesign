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
        alignItems: 'flex-end',
        marginVertical: moderateVerticalScale(24)
    }, forgetText: {
        fontSize: scale(16),
        color: colors.themeColor,
        fontWeight: '400'
    }, bottomView: {
        justifyContent: 'center',
        flexDirection: "row",
        margin: moderateVerticalScale(44)
    }

});
export default styles;