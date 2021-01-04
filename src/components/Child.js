import React from 'react';
import '../styles.css'


const Child = (props) => {


    return (
        <div className='Child'>
            <h1 className='text-center'>Child component</h1>
            <div className='wrap-center'>
            <button onClick={()=>props.setHeader('new header from child')}>Change parent header from child</button>
            </div>

        </div>

    )
}
export default Child