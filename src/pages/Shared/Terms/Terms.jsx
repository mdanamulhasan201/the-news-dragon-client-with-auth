import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h2>Terms and conditions </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio error, quas reprehenderit consequuntur quos similique blanditiis mollitia, quam cum illum quod quae sit recusandae voluptate nisi quisquam, ad iste!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;