import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import { InputData } from '../../components'
import FIREBASE from '../../config/FIREBASE'

export default class ViAiPi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            nomorHP: '',
            alamat: '',
            vip: '',
        }
    }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState]: value
        })
    }

    onSubmit = () => {
        if (this.state.nama && this.state.nomorHP && this.state.alamat && this.state.vip) {
            const menuVIP = FIREBASE.database().ref('Menu VIP');
            const mevip = {
                nama: this.state.nama,
                nomorHP: this.state.nomorHP,
                alamat: this.state.alamat,
                vip: this.state.vip
            }
            menuVIP
                .push(mevip)
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
                    label="Harga VIP Rp. 4000/pcs  :"
                    placeholder="Masukkan Jumlah pakaian"
                    keyboardType="number-pad"
                    onChangeText={this.onChangeText}
                    value={this.state.vip}
                    namaState="vip"
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
