import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { CardSatuan } from '../../components'
import FIREBASE from '../../config/FIREBASE'
import { ScrollView } from 'react-native-gesture-handler';

export class ListSatuan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            satuan: {},
            satuanKey: [],
        }
    }

    componentDidMount() {
        this.ambilData();
    }

    ambilData = () => {
        FIREBASE.database()
            .ref("Menu Satuan")
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let satuanItem = { ...data };

                this.setState({
                    satuan: satuanItem,
                    satuanKey: Object.keys(satuanItem)
                })

            })
    }

    removeData = (id) => {
        Alert.alert(
            "Info",
            "Apakah anda yakin untuk membatalkan pesanan?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        FIREBASE.database()
                            .ref('Menu Satuan/' + id)
                            .remove();
                        this.ambilData();
                        Alert.alert('Batal', 'Pesanan dibatalkan')
                    }
                }
            ],
            { cancelable: false }
        );
    }
    render() {
        const { satuan, satuanKey } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>List Transaksi Menu Satuan</Text>
                    <View style={styles.garis} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.listmenu}>
                        {satuanKey.length > 0 ? (
                            satuanKey.map((key) => (
                                <CardSatuan key={key} satuanItem={satuan[key]} id={key} {...this.props} removeData={this.removeData} />
                            ))
                        ) : (
                                <Text>Daftar Kosong</Text>
                            )}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default ListSatuan

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    garis: {
        borderWidth: 1,
        marginTop: 10,
    },
    listmenu: {
        paddingHorizontal: 30,
        marginTop: 20,
    },
});