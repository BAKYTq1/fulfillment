// Card.jsx
import React, { useState } from 'react';
import './style.scss';
import Button from '../../ui/Button';
import Foto from '../Foto/Foto';

function Card() {
  const [open, setOpen] = useState(false);
  const photo = [
    {
        img: 'https://static3.tildacdn.com/tild3236-3138-4430-a562-306538643135/01.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3261-3462-4439-b964-636662323361/14.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild6536-3365-4235-b265-323031386239/03.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3036-6434-4535-a230-386430393164/10.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3062-3964-4161-a463-666461316662/11.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3561-6237-4832-b732-396330353132/12.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3335-3437-4238-b535-366537646135/13.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild6237-3561-4630-b135-343837653363/04.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3539-3234-4061-b565-343636313533/09.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild6330-6365-4363-a335-393563333133/08.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild6234-6233-4230-b965-663934326662/05.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3163-3636-4235-b166-623936666532/06.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3964-3262-4863-b665-336336336633/07.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild6438-3131-4365-b963-613961326237/16.jpg'
    },
  ]
  return (
    <div className='cards'>
      <Button open={open} onClick={() => setOpen(prev => !prev)} />
      {open && <Foto photo={photo}/>}
    </div>
  );
}

export default Card;
