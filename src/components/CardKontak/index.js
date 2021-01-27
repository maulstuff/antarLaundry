import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native'
import Gap from '../Gap';

const CardKontak = ({ id, kiloanItem, navigation, removeData }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DetailKontak', { id: id })}>
            <View>
                <Text style={styles.nama}>{kiloanItem.nama}</Text>
                <Text style={styles.noHP}>No. HP : {kiloanItem.nomorHP}</Text>
                <Text style={styles.noHP}>Alamat : {kiloanItem.alamat}</Text>
                <Text style={styles.noHP}>Berat cucian : {kiloanItem.kiloan} kg</Text>
                <Text style={styles.noHP}>Menunggu kurir mengambil pesanan</Text>
                <View style={styles.fixToText}>
                    <Gap width={500} />
                    <Button
                        title="Batalkan Pesanan"
                        color="red"
                        onPress={() => removeData(id)}
                    />
                </View>
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
        fontSize: 20,
    },
    noHP: {
        fontSize: 14,
        color: 'gray',
    },
    fixToText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10,
        paddingLeft: 30
    },
});
