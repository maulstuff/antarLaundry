import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const userInfo = { username: 'ahmadjl@gmail.com', password: 'pass12345' }

export class Login extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome Back! </Text>
                <Text style={styles.welcome1}>Sign in untuk melanjutkan</Text>
                <TextInput style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Username"
                    placeholderTextColor="#62AF93"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#62AF93"
                    autoCapitalize="none"
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.userBtn} onPress={this._login}>
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.lupa}>Lupa Password ?</Text>
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
                    <View style={styles.container7}>
                        <Text style={styles.akun}>Tidak punya akun? </Text>
                        <Text style={styles.akun1}>Buat Akun!</Text>
                    </View>
                </View>
            </View >
        )
    }
    _login = async () => {
        if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
            //alert('Logged in');
            this.props.navigation.navigate('MainApp')
        } else {
            alert('Username or password is incorrect ');
        }
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    welcome: {
        fontSize: 40,
        marginTop: 20,
    },
    welcome1: {
        fontSize: 16,
        color: 'gray',
        marginTop: 20
    },
    input: {
        marginTop: 40,
        borderBottomColor: '#62AF93',
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    userBtn: {
        backgroundColor: '#62AF93',
        width: 200,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 30
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    gambar: {
        width: '100%',
        height: 300,
        resizeMode: "contain"
    },
    lupa: {
        marginTop: 40
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
    container7: {
        flexDirection: 'row',
        marginTop: 40
    },
    akun: {
        color: 'gray'
    },
    akun1: {
        fontWeight: 'bold'
    }
})