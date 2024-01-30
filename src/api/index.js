import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



const BASE_URL = 'https://mobile-api.pltucilacap.co.id/api';

const Api = async (url, data, method = 'POST') => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const response = await axios({
        method,
        url: `${BASE_URL}/${url}`,
        data,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
          },
      });
      
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const ApiNative = async (url, data, method = 'POST') => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
  
      const requestOptions = {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`,
        },
      };
  
      if (data) {
        requestOptions.body = JSON.stringify(data);
      }
  
      const response = await fetch(`${BASE_URL}/${url}`, requestOptions);
  
      if (!response.ok) {
        // Handle response errors here
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  };
  
  export { Api, ApiNative };