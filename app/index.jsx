import { Image, StyleSheet, Text, View } from 'react-native'
//import Logo from '../assets/img/shelfie.png'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.img} />
            <Spacer height={10} />
            <Text>Reading List App</Text>
            <Spacer height={100} />

            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
        </ThemedView>
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