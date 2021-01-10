import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

const InputData = ({ label, placeholder, keyboardType, isTextArea, onChangeText, namaState, value }) => {

    if (isTextArea) {
        return (
            <>
                <Text styles={styles.label}>{label}</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder={placeholder}
                    style={styles.textinputarea}
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={(text) => onChangeText(namaState, text)}
                />
            </>
        )
    }
    return (
        <>
            <Text styles={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.textinput}
                keyboardType={keyboardType}
                value={value}
                onChangeText={(text) => onChangeText(namaState, text)}
            />
        </>
    )
}

export default InputData

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    textinput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10
    },
    textinputarea: {
        textAlignVertical: 'top',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10
    }
})
