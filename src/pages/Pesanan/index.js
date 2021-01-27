import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { PesananAktif } from '../../components'

export class Pesanan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ListKiloan')}>
                    <PesananAktif title="List Menu Kiloan" status="Silahkan klik disini" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ListSatuan')}>
                    <PesananAktif title="List Menu Satuan" status="Silahkan klik disini" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ListVip')}>
                    <PesananAktif title="List Menu Vip" status="Silahkan klik disini" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ListKarpet')}>
                    <PesananAktif title="List Menu Karpet" status="Silahkan klik disini" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ListSetrika')}>
                    <PesananAktif title="List Menu Setrika" status="Silahkan klik disini" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ListEkspress')}>
                    <PesananAktif title="List Menu Ekspress" status="Silahkan klik disini" />
                </TouchableOpacity>
            </View>
        )
    }
}

export default Pesanan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25
    },
})