import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useAuthenticate() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Read data from AsyncStorage
        const storedData = await AsyncStorage.getItem("user");
        // Check if the data is available and set the authenticated state accordingly
        if (storedData === "test") {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        // Handle errors here
        console.error("Error reading data from AsyncStorage:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return authenticated;
}
