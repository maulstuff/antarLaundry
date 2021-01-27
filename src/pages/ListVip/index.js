import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { CardVip } from '../../components'
import FIREBASE from '../../config/FIREBASE'
import { ScrollView } from 'react-native-gesture-handler';

export class ListVip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vip: {},
            vipKey: [],
        }
    }

    componentDidMount() {
        this.ambilData();
    }

    ambilData = () => {
        FIREBASE.database()
            .ref("Menu VIP")
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let vipItem = { ...data };

                this.setState({
                    vip: vipItem,
                    vipKey: Object.keys(vipItem)
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
                            .ref('Menu VIP/' + id)
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
        const { vip, vipKey } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>List Transaksi Menu VIP</Text>
                    <View style={styles.garis} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.listmenu}>
                        {vipKey.length > 0 ? (
                            vipKey.map((key) => (
                                <CardVip key={key} vipItem={vip[key]} id={key} {...this.props} removeData={this.removeData} />
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

export default ListVip

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