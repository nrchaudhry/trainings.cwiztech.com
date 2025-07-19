import axios from 'axios';
import { loadDetail } from './login.service';

  const loginDetails = loadDetail();
  // const BaseUrl = loginDetails.applicationservice_PATH;
  const BaseUrl = '';
  // const AuthUrl = loginDetails.oauthservice_PATH;
  const AuthUrl = '';

  export const api = async(postData) => {
    try {
      const response = await axios.post(`${BaseUrl}apigateway`, postData);
      return response.data;
    } catch (error) {
      console.error('API call error:', error);
      throw error;
    }
  }

  export const getTitle = async() => {
    try {
      const response = await axios.get(`${AuthUrl}login/usertitle`);
      return response.data;
    } catch (error) {
      console.error('Get title error:', error);
      throw error;
    }
  }

  export const upload = async(file) => {
    try {
      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('application_ID', '1');
      formData.append('folder', 'test');

      const response = await axios.post(`${BaseUrl}apigateway/googledrive/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('File upload error:', error);
      throw error;
    }
  }


