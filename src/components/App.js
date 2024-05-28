import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../actions/authActions';
import { fetchDataRequest } from '../actions/dataActions'; // Import from dataActions

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loginRequest('username', 'password'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>API Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
