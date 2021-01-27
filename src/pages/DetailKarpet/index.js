import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class DetailKarpet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            karpet: {},
        };
    }

    componentDidMount() {
        FIREBASE.database()
            .ref('Menu Karpet/' + this.props.route.params.id)
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let karpetItem = { ...data };

                this.setState({
                    karpet: karpetItem,
                });
            });
    }

    render() {
        const { karpet } = this.state;
        return (
            <View style={styles.pages}>
                <Text>Nama : </Text>
                <Text style={styles.text}>{karpet.nama} </Text>

                <Text>Nomor HP : </Text>
                <Text style={styles.text}>{karpet.nomorHP} </Text>

                <Text>Alamat : </Text>
                <Text style={styles.text}>{karpet.alamat} </Text>

                <Text>Orderan : </Text>
                <Text style={styles.text}>{karpet.karpet} m</Text>

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