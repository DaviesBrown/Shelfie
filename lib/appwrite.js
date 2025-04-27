import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('shelfie-app')
    .setPlatform('dev.david.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
