import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const UserLogout = () => {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('token');
    history.push('/user-login');
  }, [history]);

  return null;
};

export default UserLogout;
