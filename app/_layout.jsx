import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'

const App = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
        <StatusBar value="auto" />
        <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title
          }}>
            <Stack.Screen name='(auth)' options={{headerShown: false, animation: "none"}} />
            <Stack.Screen name='(dashboard)' options={{headerShown: false, animation: "none"}} />
            <Stack.Screen name='index' options={{title: 'Home'}} />
        </Stack>
    </>
  )
}

export default App

const styles = StyleSheet.create({})