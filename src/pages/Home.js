import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';

const Home = () => {
    return (
        <div>
            <Mouse />
            <Navigation />
            < SocialNetwork />
            <div className='home-main'>
                <div className='main-content'>
                    <h1>JO AGENCY</h1>
                    <DynamicText />
                </div>
            </div>
        </div>
    );
};

export default Home;
