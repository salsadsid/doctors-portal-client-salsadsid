import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default PrimaryButton;