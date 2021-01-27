import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { CardSetrika } from '../../components'
import FIREBASE from '../../config/FIREBASE'
import { ScrollView } from 'react-native-gesture-handler';

export class ListSetrika extends Component {
    constructor(props) {
        super(props)

        this.state = {
            setrika: {},
            setrikaKey: [],
        }
    }

    componentDidMount() {
        this.ambilData();
    }

    ambilData = () => {
        FIREBASE.database()
            .ref("Menu Setrika")
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let setrikaItem = { ...data };

                this.setState({
                    setrika: setrikaItem,
                    setrikaKey: Object.keys(setrikaItem)
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
                            .ref('Menu Setrika/' + id)
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
        const { setrika, setrikaKey } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>List Transaksi Menu Setrika</Text>
                    <View style={styles.garis} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.listmenu}>
                        {setrikaKey.length > 0 ? (
                            setrikaKey.map((key) => (
                                <CardSetrika key={key} setrikaItem={setrika[key]} id={key} {...this.props} removeData={this.removeData} />
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

export default ListSetrika

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