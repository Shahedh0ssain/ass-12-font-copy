import React, { useState, useEffect } from 'react';
import data from './data';
import './MyReview.css'


const MyReview = () => {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    // console.log(people);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {

        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };

    }, [index]);

    return (
        <section className="section">
            <div className="flex justify-center">
                <span className='text-center text-2xl font-medium text-gray-600 border-b-4 border-[#d4af37]'>
                     Our Customer Reviews 
                </span>
            </div>
            <div className="section-center">

                {people.map((person, personIndex) => {

                    const { id, image, name, title, text } = person;

                    // console.log(person);

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }

                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide';
                    }


                    return (
                        <article className={position} key={id}>

                            <div className="card w-11/12 mx-auto bg-base-100 ">
                                <div className="avatar  pt-10">
                                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={image} />
                                    </div>
                                </div>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{name}</h2>
                                    <p className='text-xs md:text-base'>{text}</p>

                                </div>
                            </div>
                        </article>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
        </section>
    );
}

export default MyReview;