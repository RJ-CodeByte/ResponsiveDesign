import { StyleSheet, Text, View } from 'react-native'

import colors from '../../constants/colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        textTransform: 'uppercase',
        fontSize: scale(20),
        fontWeight: "bold"
    },
    headerStyle: {
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateVerticalScale(16)
    }, flatStyle: {
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        padding: moderateScale(16),
        borderRadius: moderateScale(4),
        margin: moderateScale(2)
    }, flexView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }
})

export default styles