import {StyleSheet} from 'react-native'

import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.img} />
            <ThemedText title={true}>Number 1 Book App</ThemedText>
            <Spacer height={20} />
            <ThemedText>Reading List App</ThemedText>
            <Spacer height={100} />

            <Link href="/login" style={styles.link}>
              <ThemedText>Login Page</ThemedText>
            </Link>
            <Link href="/register" style={styles.link}>
              <ThemedText>Register Page</ThemedText>
            </Link>
            <Link href="/about" style={styles.link}>
              <ThemedText>About Page</ThemedText>
            </Link>
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