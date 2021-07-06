import React from 'react';
import { Link } from 'react-router-dom';

import './MoodContent.css'

import img1 from '../images/mood_rad.png';
import img2 from '../images/mood_good.png';
import img3 from '../images/mood_meh.png';
import img4 from '../images/mood_bad.png';





export const MoodContent = (mood) => {
  let mood_img;
  if(mood.mood === 'rad'){
    mood_img = img1;
  }else if(mood.mood === 'good'){
    mood_img = img2;
  }else if(mood.mood === 'meh'){
    mood_img = img3;
  }else{
    mood_img = img4;
  }

  return(
    <div>
      <Link to={`mood/${mood.id}`}>
        <div className={
          mood_img === img1 ? 'img1'
        : mood_img === img2 ? 'img2'
        : mood_img === img3 ? 'img3'
        : 'img4'}>
          <h1 className='date'>{mood.date}</h1>
          <img src={mood_img}/>
        </div>
      </Link>
    </div>
  )
}
