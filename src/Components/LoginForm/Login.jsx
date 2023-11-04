import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {

    const auth = getAuth(app); 
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user.displayName);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn'>Login</button>
        </div>
    );
};

export default Login;