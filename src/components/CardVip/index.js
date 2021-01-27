import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import Gap from '../Gap';

const CardVip = ({ id, vipItem, navigation, removeData }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DetailVip', { id: id })}>
            <View>
                <Text style={styles.nama}>{vipItem.nama}</Text>
                <Text style={styles.noHP}>No. HP : {vipItem.nomorHP}</Text>
                <Text style={styles.noHP}>Alamat : {vipItem.alamat}</Text>
                <Text style={styles.noHP}>Jumlah pakaian : {vipItem.vip} pcs</Text>
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

export default CardVip

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
    icon: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    fixToText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10,
        paddingLeft: 30
    },
});
