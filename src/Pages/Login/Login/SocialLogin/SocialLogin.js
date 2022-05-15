import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorElement;
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'>
                </div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'>
                </div>
            </div>
            <div>
                <p>{errorElement}</p>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-danger mx-auto d-block w-50 my-2'>
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;