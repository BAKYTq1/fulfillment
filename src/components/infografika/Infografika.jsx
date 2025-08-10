// Card.jsx
import React, { useState } from 'react';
// import './style.scss';
import Button from '../../ui/Button';
import Foto from '../Foto/Foto';

function Infografika() {
  const [open, setOpen] = useState(false);
  const photo = [
    {
        img: 'https://fulfillment.kg/static.tildacdn.one/tild3062-6330-4262-b138-353237383838/465287.jpg'
    },
    {
        img: 'https://fulfillment.kg/static.tildacdn.one/tild3234-3534-4364-b161-613932616235/2.jpg'
    },
    {
        img: 'https://fulfillment.kg/static.tildacdn.one/tild6363-6138-4437-b233-626338323861/65874398.jpg'
    },
    {
        img: 'https://fulfillment.kg/static.tildacdn.one/tild6465-3462-4162-b739-336436636539/01.jpg'
    },
    {
        img: 'https://fulfillment.kg/static.tildacdn.one/tild3632-3535-4363-a666-663465303339/176584.jpg'
    },
    {
        img: 'https://fulfillment.kg/static.tildacdn.one/tild6535-6164-4735-a465-623233306136/492123.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild6338-3538-4439-a464-383530366566/730909.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3965-6234-4564-b361-346463383138/60009409.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild6361-6634-4766-a338-356239623233/65983746.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3965-3930-4639-a661-623062653766/01.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild6264-3065-4432-b834-343965333633/2.jpg'
    },
    {
        img: 'https://static3.tildacdn.com/tild3237-3933-4635-b065-623833666638/658746.jpg'
    },
    
  ]
  return (
    <div className='cards'>
      <Button open={open} onClick={() => setOpen(prev => !prev)} />
      {open && <Foto photo={photo}/>}
    </div>
  );
}

export default Infografika;
