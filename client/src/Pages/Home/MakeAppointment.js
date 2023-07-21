import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <div
            style={
                {
                    background: `url(${appointment})`
                }}
            className='flex justify-center items-center my-28'>
            <div className='flex-1 mt-[-120px] hidden lg:block'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-xl font-bold uppercase text-primary'>Appointment</h2>
                <h4 className='text-white text-3xl'>Make An Appointment Today</h4>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt odio adipisci dignissimos sed quod tempora natus, nisi, officia odit ullam ipsam impedit quae saepe harum corporis qui explicabo, commodi ipsa?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeAppointment;