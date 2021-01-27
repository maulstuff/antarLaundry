import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import FIREBASE from '../../config/FIREBASE';

export default class DetailSetrika extends Component {
    constructor(props) {
        super(props);

        this.state = {
            setrika: {},
        };
    }

    componentDidMount() {
        FIREBASE.database()
            .ref('Menu Setrika/' + this.props.route.params.id)
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let setrikaItem = { ...data };

                this.setState({
                    setrika: setrikaItem,
                });
            });
    }

    render() {
        const { setrika } = this.state;
        return (
            <View style={styles.pages}>
                <Text>Nama : </Text>
                <Text style={styles.text}>{setrika.nama} </Text>

                <Text>Nomor HP : </Text>
                <Text style={styles.text}>{setrika.nomorHP} </Text>

                <Text>Alamat : </Text>
                <Text style={styles.text}>{setrika.alamat} </Text>

                <Text>Orderan : </Text>
                <Text style={styles.text}>{setrika.setrika} pcs</Text>

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