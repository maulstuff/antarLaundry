import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { Lagi } from '../../assets'

export class LoginAwal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={Lagi} style={styles.lagi} />
                <Text style={styles.hello}>Hello !</Text>
                <Text style={styles.hello1}>Selamat datang di AntarLaundry.
                Aplikasi yang akan memudahkan anda</Text>

                <View style={styles.container2}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={styles.btntxt}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={() => Alert.alert('Masih Maintenance')}>
                        <Text style={styles.btntxt1}>SignUp</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.txt1}>Or via social media</Text>
                <View style={styles.container3}>
                    <View style={styles.container4}>
                        <Text style={styles.txt2}>f</Text>
                    </View>
                    <View style={styles.container5}>
                        <Text style={styles.txt3}>G</Text>
                    </View>
                    <View style={styles.container6}>
                        <Text style={styles.txt4}>in</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default LoginAwal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lagi: {
        width: '100%',
        height: 300,
        resizeMode: 'contain'
    },
    hello: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    hello1: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20
    },
    container2: {
        flexDirection: 'row',
        margin: 20,
        paddingVertical: 20,
    },
    button: {
        backgroundColor: '#62AF93',
        padding: 10,
        width: 150,
        borderRadius: 30,
        marginHorizontal: 2
    },
    btntxt: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    btntxt1: {
        textAlign: 'center',
        color: '#62AF93',
        fontSize: 18,
    },
    button1: {
        backgroundColor: '#fff',
        padding: 10,
        width: 150,
        borderRadius: 30,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: '#62AF93'
    },
    container3: {
        flexDirection: 'row',
        marginTop: 20
    },
    container4: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#3f51b5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container5: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#f44336',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    container6: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#1565c0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt1: {
        fontSize: 16,
        marginTop: 10
    },
    txt2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    txt3: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    txt4: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
})
