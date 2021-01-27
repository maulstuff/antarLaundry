import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { WARNA_UTAMA, WARNA_WARNING, WARNA_ABU_ABU } from '../../utils/constant';

const Popup = ({ title, nama, alamat, isi, email, isiemail, telp, isitelp }) => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.nama}>{nama}</Text>
                <Text style={styles.alamat}>{alamat}</Text>
                <Text style={styles.isi}>{isi}</Text>
                <Text style={styles.email}>{email}</Text>
                <Text style={styles.isiemail}>{isiemail}</Text>
                <Text style={styles.telp}>{telp}</Text>
                <Text style={styles.isitelp}>{isitelp}</Text>
            </View>
        </View>
    );
};

export default Popup;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginVertical: windowHeight * 0.02,
        alignItems: 'center'
    },
    text: {
        marginLeft: windowWidth * 0.05,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    nama: {
        fontSize: 15,
        color: 'gray',
    },
    alamat: {
        fontSize: 20,
        marginBottom: 1,
        fontWeight: 'bold',
    },
    isi: {
        fontSize: 15,
        color: 'gray'
    },
    email: {
        fontSize: 20,
        marginBottom: 1,
        fontWeight: 'bold',
    },
    isiemail: {
        fontSize: 15,
        color: 'gray',
        marginBottom: 15
    },
    telp: {
        fontSize: 20,
        marginBottom: 1,
        fontWeight: 'bold',
        marginVertical: -10
    },
    isitelp: {
        fontSize: 15,
        color: 'gray',
        marginBottom: 15
    },
    status: (status) => ({
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
        color: status === 'Silahkan klik disini' ? WARNA_UTAMA : status === 'Masih Dicuci' ? WARNA_WARNING : WARNA_ABU_ABU,
    })
});
