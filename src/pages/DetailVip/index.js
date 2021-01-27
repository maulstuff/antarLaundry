import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class DetailVip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vip: {},
        };
    }

    componentDidMount() {
        FIREBASE.database()
            .ref('Menu VIP/' + this.props.route.params.id)
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let vipItem = { ...data };

                this.setState({
                    vip: vipItem,
                });
            });
    }

    render() {
        const { vip } = this.state;
        return (
            <View style={styles.pages}>
                <Text>Nama : </Text>
                <Text style={styles.text}>{vip.nama} </Text>

                <Text>Nomor HP : </Text>
                <Text style={styles.text}>{vip.nomorHP} </Text>

                <Text>Alamat : </Text>
                <Text style={styles.text}>{vip.alamat} </Text>

                <Text>Orderan : </Text>
                <Text style={styles.text}>{vip.vip} pcs</Text>

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