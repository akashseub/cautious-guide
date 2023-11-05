import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {


    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] =useState('');

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

    const handleRegister = e => {
        e.preventDefault();

        setRegisterError('')
        setRegisterSuccess('')

        const email = e.target.email.value;
        const password = e.target.password.value;

        if(password.length<6){
            setRegisterError('Password should be at least 6 characters');
            return;
        }

        console.log(email);
        console.log(password);

        createUserWithEmailAndPassword(auth,email,password)
            .then(result => {
                console.log(result.user)
                setRegisterSuccess('User create successfully');
            })
            .catch(error =>{
                setRegisterError(error.message);
            })
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        {
                            registerError && <p className='text-red-700'>{registerError}</p>
                        }
                        {
                            registerSuccess && <p className='text-green-700'>{registerSuccess}</p>
                        }
                    </div>
                </div>
            </div>


            <button onClick={handleGoogleLogin} className='btn my-4'>Google Login</button>
        </div>
    );
};

export default Login;