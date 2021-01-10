import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import { InputData } from '../../components'
import FIREBASE from '../../config/FIREBASE'


export default class Karpet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            nomorHP: '',
            alamat: '',
            karpet: '',
        }
    }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState]: value
        })
    }

    onSubmit = () => {
        if (this.state.nama && this.state.nomorHP && this.state.alamat && this.state.karpet) {
            const menuKarpet = FIREBASE.database().ref('Menu Karpet');
            const mekarpet = {
                nama: this.state.nama,
                nomorHP: this.state.nomorHP,
                alamat: this.state.alamat,
                karpet: this.state.karpet
            }
            menuKarpet
                .push(mekarpet)
                .then((data) => {
                    Alert.alert('Sukses', 'Data Tersimpan');
                    this.props.navigation.replace('MainApp');
                })
                .catch((error) => {
                    console.log("Error : ", error);
                })


        } else {
            Alert.alert('Error', 'Form wajib di isi !');
        }
    }

    render() {
        return (
            <View style={styles.pages}>
                <InputData
                    label="Nama :"
                    placeholder="Masukkan Nama"
                    onChangeText={this.onChangeText}
                    value={this.state.nama}
                    namaState="nama"
                />
                <InputData
                    label="No HP :"
                    placeholder="Masukkan No HP"
                    keyboardType="number-pad"
                    onChangeText={this.onChangeText}
                    value={this.state.nomorHP}
                    namaState="nomorHP"
                />
                <InputData
                    label="Alamat :"
                    placeholder="Masukkan Alamat"
                    isTextArea={true}
                    onChangeText={this.onChangeText}
                    value={this.state.alamat}
                    namaState="alamat"
                />
                <InputData
                    label="Harga cuci karpet /m Rp. 5000 :"
                    placeholder="Masukkan Ukuran Karpet"
                    keyboardType="number-pad"
                    onChangeText={this.onChangeText}
                    value={this.state.karpet}
                    namaState="karpet"
                />
                <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
                    <Text style={styles.textTombol}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 30
    },
    tombol: {
        backgroundColor: '#62AF93',
        padding: 15,
        borderRadius: 10,
        marginTop: 10
    },
    textTombol: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF'
    }
})
