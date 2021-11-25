import React from 'react';

const Button = ({children, disabled}) => {
    return (
        <button
            onClick={() => console.log(children)}
            disabled={disabled}
            type="button">
            {children}
        </button>
    );
}

export default Button;