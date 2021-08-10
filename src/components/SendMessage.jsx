import { useState } from 'react';
import { db, auth } from '../firebase';
import firebase from 'firebase';
import { Input, Button } from '@material-ui/core';

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState('');

  async function sendMessage(e) {
    console.log(auth.currentUser.displayName);
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: '75%',
              fontSize: '15px',
              fontWeight: '550',
              marginLeft: '45px',
              marginBottom: '-3px',
            }}
            placeholder="Type a Message"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            style={{
              width: '15%',
              fontSize: '15px',
              textTransform: 'none',
              backgroundColor: '#395dff',
              color: '#FFF',
              fontWeight: '550',
              margin: '4px 5% -13px 5%',
              maxWidth: '200px',
            }}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
