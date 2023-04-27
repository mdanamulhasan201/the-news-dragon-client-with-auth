import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-light p-2  mt-5'>
            <h4 >Q-Zone</h4>
            <div className='text-center'>
                <img src={qzone1} alt="" />                
                <img src={qZone2} alt="" />                
                <img src={qzone3} alt="" />                

            </div>
        </div>
    );
};

export default QZone;