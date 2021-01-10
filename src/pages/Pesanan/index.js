import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { CardKontak, CardSetrika } from '../../components'
import FIREBASE from '../../config/FIREBASE'
import { ScrollView } from 'react-native-gesture-handler';

export class Pesanan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kiloan: {},
            kiloanKey: [],
            setrika: {},
            setrikaKey: []
        }
    }

    componentDidMount() {
        FIREBASE.database()
            .ref("Menu Setrika")
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let kiloanItem = { ...data };
                let setrikaItem = { ...data };

                this.setState({
                    setrika: setrikaItem,
                    setrikaKey: Object.keys(setrikaItem)
                })

                this.setState({
                    kiloan: kiloanItem,
                    kiloanKey: Object.keys(kiloanItem)
                })

            })
    }
    render() {
        const { kiloan, kiloanKey, setrika, setrikaKey } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hasil Pesanan</Text>
                    <View style={styles.garis} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.listmenu}>
                        {setrikaKey.length > 0 ? (
                            kiloanKey.map((key) => (
                                <CardSetrika key={key} setrikaItem={setrika[key]} id={key} />
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

export default Pesanan

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