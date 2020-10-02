import React from 'react';

const SignIn = ({auth}) => {

    //Google sign-in AUTH   
    const googleSignin = () => {
        const provider  = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
          <button className="sign-in" onClick={googleSignin}>Sign in with Google</button>
          <p>Do not violate the community guidelines or you will be banned!!!</p>
        </>
      )
}

export default SignIn;