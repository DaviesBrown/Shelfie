import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
    <StatusBar value="auto" />
    <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  )
}

export default AuthLayout