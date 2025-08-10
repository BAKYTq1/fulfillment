// Card.jsx
import React, { useState } from 'react';
import './style.scss';
import Button from '../../ui/Button';
import Foto from '../Foto/Foto';
import YoutubeCard from '../YoutubeCard/YoutubeCard';

function Videoobzor() {
  const [open, setOpen] = useState(false);
  const Item = [
    {
        video: 'https://www.youtube.com/embed/cXDOHqa_QgY'
    },
   
    {
        video: 'https://www.youtube.com/embed/cXDOHqa_QgY'
    },
   
    {
        video: 'https://www.youtube.com/embed/cXDOHqa_QgY'
    },
   
    {
        video: 'https://www.youtube.com/embed/cXDOHqa_QgY'
    },
   
    {
        video: 'https://www.youtube.com/embed/cXDOHqa_QgY'
    },
    {
        video: 'https://www.youtube.com/embed/cXDOHqa_QgY'
    },
   
  ]
  return (
    <div className='videoobzor container'>
      <Button open={open} onClick={() => setOpen(prev => !prev)} />
        <div className='videoobzor-item'>
        {Item.map((item, index) => (
            <div key={index}>
                {open && <YoutubeCard video={item.video}/>}
            </div>
        ))}
        </div>
    </div>
  );
}

export default Videoobzor;
