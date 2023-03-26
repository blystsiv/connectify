import React from 'react';
import axios from 'axios';

export const App = () => {
  const [hi, setHi] = React.useState('');

  React.useEffect(() => {
    axios.get('http://localhost:3000/').then((response) => {      
      setHi(response.data);
    });
  }, []);

  return <h1>{hi}</h1>;
};

export default App;
