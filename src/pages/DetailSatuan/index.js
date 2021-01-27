import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class DetailSatuan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            satuan: {},
        };
    }

    componentDidMount() {
        FIREBASE.database()
            .ref('Menu Satuan/' + this.props.route.params.id)
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let satuanItem = { ...data };

                this.setState({
                    satuan: satuanItem,
                });
            });
    }

    render() {
        const { satuan } = this.state;
        return (
            <View style={styles.pages}>
                <Text>Nama : </Text>
                <Text style={styles.text}>{satuan.nama} </Text>

                <Text>Nomor HP : </Text>
                <Text style={styles.text}>{satuan.nomorHP} </Text>

                <Text>Alamat : </Text>
                <Text style={styles.text}>{satuan.alamat} </Text>

                <Text>Orderan : </Text>
                <Text style={styles.text}>{satuan.satuan} pcs</Text>

                <Text>Menunggu kurir mengambil pesanan </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pages: {
        margin: 30,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    }
});