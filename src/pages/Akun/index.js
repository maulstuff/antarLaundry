import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Ava } from '../../assets';
import { Popup } from '../../components/';

const Akun = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.ava}>
                <Image source={Ava} style={styles.lagi} />
            </View>
            <View style={styles.data}>
                <Text style={styles.nama}>Ahmad Jalaludin</Text>
                <Text style={styles.nama2}>@ahmadJL</Text>
                <View style={styles.data1}>
                    <Popup title="Nama Lengkap"
                        nama="Ahmad Jalaludin El Rumi"
                        alamat="Alamat"
                        isi="JL.Sukamenak No. 42 Kec. Margahayu Kab.Bandung 40XXX "
                        email="Email"
                        isiemail="ahmadjl@gmail.com"
                        telp="No. Telpon"
                        isitelp="08987171717" />
                </View>
            </View >
            <View style={styles.container2}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.btntxt1}>Keluar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Akun

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ava: {
        flexDirection: 'row',
        marginRight: 200
    },
    lagi: {
        width: '75%',
        height: 200,
        resizeMode: 'contain',
        marginRight: 250,
    },
    nama: {
        fontSize: 25,
        marginLeft: 150,
        marginTop: -130
    },
    nama2: {
        marginLeft: 150,
        color: 'gray'
    },
    info: {
        marginTop: 50,
        marginLeft: 30,
        fontSize: 20,
    },
    isi: {
        marginLeft: 30,
        marginTop: 10
    },
    button1: {
        backgroundColor: 'red',
        padding: 10,
        width: 150,
        borderRadius: 30,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center'
    },
    btntxt1: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    info2: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 20,
    },
    info3: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 20,
    },
    data1: {
        margin: 25
    },
    container2: {
        margin: 20,
        paddingVertical: 20,
        alignItems: 'center'
    },
})
