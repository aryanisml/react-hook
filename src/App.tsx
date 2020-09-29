import React, { useContext, useState } from 'react';
import './App.css';
import Counter from './Counter';
import EffectTest from './EffectTest';
import ContextTest from './ContextTest';
import UserContext, { UserContextProvider } from './UserContext';
function App() {
  // const [username, setUser] = useState('New world');
  return (
    <div className="App">
      <UserContextProvider>
      <ContextTest/>
      </UserContextProvider>
      <Counter />
      <EffectTest />
    </div>
  );
}

export default App;
