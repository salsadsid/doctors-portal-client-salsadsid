import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            review: '',
            location: 'Bangladesh',
            name: 'Salman Sadik',
            img: people1
        },
        {
            _id: 2,
            review: '',
            location: 'Rangpur',
            name: 'Salman Sadik',
            img: people2
        },
        {
            _id: 3,
            review: '',
            location: 'Dinajpur',
            name: 'Salman Sadik',
            img: people3
        },
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary text-xl font-bold'>Testimonial</h2>
                    <h4 className='text-3xl'>What Our Patients Says</h4>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;