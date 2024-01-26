import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



const BASE_URL = 'http://mobile-api.pltucilacap.co.id:8089/api';

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
  
  export { Api };