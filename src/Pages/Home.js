import React from 'react';
import Blog from '../Components/Blog/Blog';
import Showcase2 from '../Components/Showcase2';
import Showcase1 from '../Components/Showcase1';
// import Showcase from '../Components/Showcase1'
import Slider from '../Components/Slider';
import Title from '../Components/Title';
// import Services from './Services';
import Services from './Services';
import Showcase3 from '../Components/Showcase3';
import MyReview from '../Components/MyReview';

const Home = () => {
    return (
        // min-h[calc(100vh - ]
        <div className=''>
           <Slider></Slider>
           <Title></Title>
           <Showcase2></Showcase2>
           <Services></Services>
           <Showcase3></Showcase3>
           {/* <Showcase4></Showcase4> */}
           <MyReview></MyReview>
        </div>
    );
};

export default Home;