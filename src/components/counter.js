import React from 'react';
import '../styles/counter.css'

function Counter ({ clickNum }) {
return (
        <div className='counter-container' >
            {clickNum}
        </div>
    );
}

export default Counter;