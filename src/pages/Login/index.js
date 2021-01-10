import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'


const Login = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#D1EAE1"
                barStyle="light-content"
            />
            <Text style={styles.welcome}>Selamat Datang di AntarLaundry</Text>
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
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.userBtn} onPress={() => navigation.navigate('MainApp')}>
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userBtn} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.btnTxt}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Login

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
        width: '40%',
        borderRadius: 10
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF'
    }
})
