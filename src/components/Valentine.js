import React from 'react';
import './Valentine.css';

function Valentine() {
    const clickedYes = () => {
        alert("Looking forward to meet you then...");
    }

  return (
    <div className='valentine'>
        <div className='valentine__body'>
            <h1>Will You Be My Valentine !?</h1>
        </div>

        <div className='valentine__footer'>
            <div className='valentine__yes'>
                <button
                    onClick={() => clickedYes()}
                >
                    <h2>Yes</h2>
                </button>
            </div>
            
            
            <div className='valentine__no'>
                <button>
                    <h2>No</h2>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Valentine