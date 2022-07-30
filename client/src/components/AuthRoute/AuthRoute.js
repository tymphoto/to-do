import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthRoute({ children }) {
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  console.log(user);

  return (
    <div>{children}</div>
  );
}

export default AuthRoute;
