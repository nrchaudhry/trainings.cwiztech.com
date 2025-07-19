import { setting } from '../settings';
import { toast } from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom';

export const saveToken = (token) => {
  if (token) {
    localStorage.setItem('access_token', token);
    return true;
  } else {
    return false;
  }
};

export const saveDetail = (user) => {
  if (user) {
    localStorage.setItem(setting.application_ID, JSON.stringify(user));
    return true;
  } else {
    return false;
  }
};

export const loadToken = () => {
  const token = localStorage.getItem('access_token');
  return token;
};

export const loadDetail = () => {
  const getUser = localStorage.getItem(setting.application_ID);
  return JSON.parse(getUser);
};

export const logout = () => {
  localStorage.removeItem(setting.application_ID);
  localStorage.removeItem('access_token');
  window.location.assign(
    `${setting.LoginAppPath}home/logout?application_ID=${setting.application_ID}`
  );
  return true;
};

export const isLoggedIn = () => {
  const getUser = localStorage.getItem(setting.application_ID);
  const accessToken = localStorage.getItem('access_token');
  return getUser && accessToken ? true : false;
};

// Example of using React Router and Toast in a functional component
export const useLoginService = () => {
  const navigate = useNavigate();

  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
    toast.error(message);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return {
    saveToken,
    saveDetail,
    loadToken,
    loadDetail,
    logout,
    isLoggedIn,
    notifySuccess,
    notifyError,
    navigateTo,
  };
};
