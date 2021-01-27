import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { CardEkspress } from '../../components'
import FIREBASE from '../../config/FIREBASE'
import { ScrollView } from 'react-native-gesture-handler';

export class ListEkspress extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ekspress: {},
            ekspressKey: [],
        }
    }

    componentDidMount() {
        this.ambilData();
    }

    ambilData = () => {
        FIREBASE.database()
            .ref("Menu Ekspress")
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let ekspressItem = { ...data };

                this.setState({
                    ekspress: ekspressItem,
                    ekspressKey: Object.keys(ekspressItem)
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
                            .ref('Menu Ekspress/' + id)
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
        const { ekspress, ekspressKey } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>List Transaksi Menu Ekspress</Text>
                    <View style={styles.garis} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.listmenu}>
                        {ekspressKey.length > 0 ? (
                            ekspressKey.map((key) => (
                                <CardEkspress key={key} ekspressItem={ekspress[key]} id={key} {...this.props} removeData={this.removeData} />
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

export default ListEkspress

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