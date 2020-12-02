import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import '../../reportWebVitals.js';
import './page.style.scss';



const Page = () => {
    const [count, setCount] = useState(5);

    return (
        <div className='container'>
            <div>
                <div 
                    className={`ele ${count >= 10 && 'visibility-hidden'}`}
                    onClick={() => setCount(count + 1)}
                ><ExpandLessIcon className='arrow'/></div>
                <div className='number'>{count}</div>
                <div 
                    className={`ele ${count <= 0 && 'visibility-hidden'}`}
                    onClick={() => setCount(count - 1)}><ExpandMoreIcon className='arrow'/></div>
            </div>  
        </div>  
    );
};


export default Page;