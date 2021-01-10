import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const CardKontak = ({ key, kiloanItem }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Text style={styles.nama}>{kiloanItem.nama}</Text>
                <Text style={styles.noHP}>No. HP : {kiloanItem.nomorHP}</Text>
                <Text style={styles.noHP}>Alamat : {kiloanItem.alamat}</Text>
                <Text style={styles.noHP}>Berat cucian : {kiloanItem.kiloan} kg</Text>
                <Text style={styles.noHP}>Menunggu pembayaran</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardKontak

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    nama: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    noHP: {
        fontSize: 12,
        color: 'gray',
    },
    icon: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
