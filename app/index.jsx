import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../assets/img/shelfie.png'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img}></Image>
            <Text style={styles.title}>Home</Text>
            <Text style={{margin: 10}}>Reading List App</Text>
            <View style={styles.card}>
                <Text>Hello, this is a card.</Text>
            </View>
            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    card: {
        backgroundColor: "#eee",
        padding: 20,
        borderRadius: 5,
        boxShadow: "2px 2px rgba(0,0,0,0.3)"
    },
    img: {
        marginVertical: 20
    },
    link: {
        padding: 10,
        marginBottom: 10,
        textDecorationLine: "underline"
    }
})