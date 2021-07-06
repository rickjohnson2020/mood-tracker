import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoodDetail } from './api/getMood';
import useMedia from 'use-media';

import './Detail.css'

import calendarIcon from './images/calendar_icon.png'
import moodIcon from './images/mood_icon.png'
import noteIcon from './images/note_icon.png'



export const Detail = () => {
  const initialState = {
    date: '',
    mood: '',
    note: '',
  };

  const [detail, setDetail] = useState(initialState)
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const isWide = useMedia({minWidth: '1000px'});


  useEffect(()=>{
    getMoodDetail(id)
    .then(d => {
      setDetail(d)
      setLoading(false)
    })
    .catch(err => console.log(err));
  },[id])

  return(
    <div>
      {loading ?
        <h1>loading...</h1>
        :
        isWide ?
        <div className='common'>
          <div className='date-common'>
            <img className='calendar-icon' src={calendarIcon} />
            <h1 className='detail-date'>{detail.date}</h1>
          </div>
          <div className='mood-common'>
            <img className='mood-icon' src={moodIcon} />
            <h2 className='detail-mood'>{detail.mood}</h2>
          </div>
          <div className='note-common'>
            <img className='note-icon' src={noteIcon} />
            <h2 className='detail-note'>{detail.note}</h2>
          </div>
        </div>
        :
        <div className='PhoneCommon'>
          <div className='date-common'>
            <img className='calendar-icon' src={calendarIcon} />
            <h1 className='detail-date'>{detail.date}</h1>
          </div>
          <div className='mood-common'>
            <img className='mood-icon' src={moodIcon} />
            <h2 className='detail-mood'>{detail.mood}</h2>
          </div>
          <div className='note-common'>
            <img className='note-icon' src={noteIcon} />
            <h2 className='detail-note'>{detail.note}</h2>
          </div>
        </div>
      }
    </div>
  )

}
