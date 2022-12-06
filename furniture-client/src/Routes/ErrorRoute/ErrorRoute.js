import React from 'react';
import './ErrorRoute.css';

const ErrorRoute = () => {
    return (
        <div className='error'>
             <div>
            <h1>Oops!</h1>
            <h1>404 Error!!</h1>
            <p>Sorry, an unexpected error has occurred.Enter correct path to Go To The Website</p>
            </div>
        </div>
    );
};

export default ErrorRoute;