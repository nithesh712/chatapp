import React from 'react';
import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);
  return <React.Fragment>{user ? <Chat /> : <SignIn />}</React.Fragment>;
}

export default App;
