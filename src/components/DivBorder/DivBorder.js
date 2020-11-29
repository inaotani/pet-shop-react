import React from 'react';
import './style.css';

const DivBorder = ({children}) => {
    return(
        <>
        <div className="div-border">
            {children}
        </div>
        </>
    );
};

export default DivBorder;
