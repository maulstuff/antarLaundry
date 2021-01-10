import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'


const Register = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#D1EAE1"
                barStyle="light-content"
            />
            <Text style={styles.welcome}>Silahkan buat akun terlebih dahulu</Text>
            <TextInput style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                placeholderTextColor="#62AF93"
            />
            <TextInput style={styles.input}
                placeholder="Password"
                placeholderTextColor="#62AF93"
                autoCapitalize="none"
                secureTextEntry
            />
            <TextInput style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#62AF93"
                autoCapitalize="none"
                secureTextEntry
            />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.userBtn} onPress={() => navigation.navigate('MainApp')}>
                    <Text style={styles.btnTxt}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userBtnBatal} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btnTxt}>Batal</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D1EAE1'
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 20
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        paddingHorizontal: 10,
        borderColor: '#62AF93'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    userBtn: {
        backgroundColor: '#62AF93',
        padding: 15,
        width: '35%',
        borderRadius: 10
    },
    userBtnBatal: {
        backgroundColor: 'red',
        padding: 15,
        width: '35%',
        borderRadius: 10
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF'
    }
})
