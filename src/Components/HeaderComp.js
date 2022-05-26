import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePath from '.././constants/ImagePath'
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';

const HeaderComp = ({
    onPressBack
}) => {
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={!!onPressBack ? onPressBack : () => goBack()}
            >
                <FontAwesome5 size={20} name={ImagePath.back} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: moderateScale(42)
    }
})