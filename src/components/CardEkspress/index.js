import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native'
import Gap from '../Gap';

const CardEkspress = ({ id, ekspressItem, navigation, removeData }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DetailEkspress', { id: id })}>
            <View>
                <Text style={styles.nama}>{ekspressItem.nama}</Text>
                <Text style={styles.noHP}>No. HP : {ekspressItem.nomorHP}</Text>
                <Text style={styles.noHP}>Alamat : {ekspressItem.alamat}</Text>
                <Text style={styles.noHP}>Jumlah Pakaian : {ekspressItem.ekspress} pcs</Text>
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

export default CardEkspress

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
