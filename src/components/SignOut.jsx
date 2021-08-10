import { auth } from '../firebase';
import { Button } from '@material-ui/core';

function SignOut() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
        backgroundColor: '#FAFAFA',
        top: 0,
        borderBottom: 'solid 1px lightgray',
        zIndex: '10',
      }}
    >
      <h3>
        Hello,{' '}
        {auth.currentUser.displayName ? auth.currentUser.displayName : null}{' '}
      </h3>
      <Button
        style={{
          padding: '5px',
          marginTop: '12px',
          marginLeft: '30px',
          marginBottom: '12px',
          fontSize: '15px',
          borderRadius: '10px',
          fontWeight: '600',
          textTransform: 'none',
          backgroundColor: '#FF0000',
          color: '#FFF',
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default SignOut;
