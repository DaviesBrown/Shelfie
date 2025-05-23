import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'


const Profile = () => {
  const { logout } = useUser()

  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
           Your Email
        </ThemedText>
        <Spacer />
        <ThemedButton onPress={logout}>
            <ThemedText style={{ color: "#f2f2f2" }}>Logout</ThemedText>
        </ThemedButton>
        <ThemedText>Time to start reading some books....</ThemedText>

    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center'
    }
})