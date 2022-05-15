import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const ContactUs = () => {
    return (
        <div class="hero mt-28" style={
            {
                background: `url(${appointment})`
            }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div className=' py-10'>
                    <h3 className='text-primary font-bold text-xl'>Contact Us</h3>
                    <h5 className='text-white text-3xl mb-5'>Stay Connected With Us</h5>
                    <div class="form-control">
                        <input type="text" placeholder="Email Address" class="input input-bordered lg:w-96 w-72 mb-4" />
                    </div>
                    <div class="form-control">
                        <input type="text" placeholder="Subject" class="input input-bordered lg:w-96 w-72" />
                        <textarea class="textarea textarea-primary my-4 lg:w-96 w-72" placeholder="Your Message"></textarea>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary lg:w-96 w-72 text-white font-bold">Submit</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;