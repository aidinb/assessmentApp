import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAuthenticate() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Read data from AsyncStorage
                const storedData = await AsyncStorage.getItem('user');
                console.log('storedData',storedData)

                // Check if the data is available and set the authenticated state accordingly
                if (storedData === 'test') {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                // Handle errors here
                console.error('Error reading data from AsyncStorage:', error);
            }
        };

        // Call the fetchData function when the component mounts
        fetchData();
    }, []);

    return authenticated;
}
