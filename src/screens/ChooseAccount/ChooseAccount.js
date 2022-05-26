import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import HeaderComp from '../../Components/HeaderComp'
import { moderateScale } from 'react-native-size-matters'
import ButtonComp from '../../Components/ButttonComp'
import styles from './styles'
import Constants from '../../constants/navigationStrings'
const ChooseAccount = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.headingText}>Choose Your Account Type</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.imageStyle} source={{ uri: 'https://s3fs.paintnite.com/yaymaker-images/venue/original/wjgav-10014375-virtual-event-create-from-home.jpg' }} />
                    <Text style={styles.textStyle}>Agency</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.imageStyle} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/146/146031.png' }} />
                    <Text style={styles.textStyle}>Freelancer</Text>
                </View>
                <ButtonComp btnText={"Continue"} onPress={() => navigation.navigate(Constants.REGISTER)} btnStyle={{ width: '100%' }} />
            </View>
        </SafeAreaView >
    )
}



export default ChooseAccount;