import React from 'react';

const Slider = () => {
    // const slider = [
    //     "https://i.ibb.co/61zs6Kh/samuele-errico-piccarini-FMb-WFDi-VRPs-unsplash.jpg",
    //     "https://autohive-html.themetags.com/assets/img/home1/car-8.jpg",
    //     "https://autohive-html.themetags.com/assets/img/home1/car-8.jpg",
    // ]
    return (
        <div className=''>
            <div className='h-60 md:h-screen ' style={{
                backgroundImage: "url(" + "https://bynder.sbdinc.com/m/b62ecf930f3ee1b/Drupal_Large-XR_RANGE17_G1.jpg" + ")",
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}>

                <div className='h-full w-full bg-gradient-to-r from-[#151414]  to-[#151414 ]  flex items-center justify-center'>
                    {/* <h1 className='text-3xl md:text-8xl md:leading-[5rem]  text-white text-center pb-20  font-bold   '>Welcome to <span style={{ color: 'red' }}>Autohive</span> <br /> Car Dealership</h1> */}

                </div>



            </div>

            {/* dusi ui */}

        </div>
    );
};

export default Slider;