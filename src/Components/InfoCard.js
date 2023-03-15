import React from 'react';

const infoCard = ({ img, title,p }) => {
    // console.log(img)
    return (
        <div className={`card card-side   bg-[#d4af37] md:w-full p-2 py-2 md:py-10 m-2 md:m-5`}>
            <div className="card-body w-6/12 p-2 md:p-5">
                <h2 className="text-lg md:text-3xl text-white font-medium">{title}</h2>
                <p className='text-white text-xs md:text-lg'>{p}</p>
               {/* <button class="btn btn-primary">Get Started</button> */}

            </div>
            <figure className='w-4/12 '>
                <img className='w-[100px] md:w-[135px]' src={img} alt="Album" />
            </figure>

        </div>
      
    );
};

export default infoCard;