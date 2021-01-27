import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { CardKarpet } from '../../components'
import FIREBASE from '../../config/FIREBASE'
import { ScrollView } from 'react-native-gesture-handler';

export class ListKarpet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            karpet: {},
            karpetKey: [],
        }
    }

    componentDidMount() {
        this.ambilData();
    }

    ambilData = () => {
        FIREBASE.database()
            .ref("Menu Karpet")
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let karpetItem = { ...data };

                this.setState({
                    karpet: karpetItem,
                    karpetKey: Object.keys(karpetItem)
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
                            .ref('Menu Karpet/' + id)
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
        const { karpet, karpetKey } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>List Transaksi Menu Karpet</Text>
                    <View style={styles.garis} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.listmenu}>
                        {karpetKey.length > 0 ? (
                            karpetKey.map((key) => (
                                <CardKarpet key={key} karpetItem={karpet[key]} id={key} {...this.props} removeData={this.removeData} />
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

export default ListKarpet

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