import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                // setUsers(result.user);
            })
        // .finally(() => setIsLoading(false));
    }
    return (
        <div className='container my-5 text-center'>
            <h1 className='text-center text-primary my-5'>Please Login</h1>

            <div >
                <input type="text" name="" id="" placeholder='Email' /><br />
                <input className='my-3' type="password" name="" id="" placeholder='Password' /><br />
                <button className='btn btn-warning' type="submit">Submit</button>
            </div>
            <div className='my-5'>----------------------------------------------------</div>
            <button onClick={handleGoogleLogin} className='btn btn-warning py-3 px-5'>Google Sign In</button>
        </div>
    );
};

export default Login;