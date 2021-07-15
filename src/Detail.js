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
          <div className='date'>
            <img src={calendarIcon} width='25' />
            <h2>{detail.date}: </h2>
            <h3>{detail.mood}</h3>
          </div>
          <div className='note'>
            <img src={noteIcon} width='30' />
            <h2>Note</h2>
            <p>{detail.note}</p>
          </div>
        </div>
        :
        <div className='PhoneCommon'>
          <div className='date'>
            <img src={calendarIcon} width='25' />
            <h2>{detail.date}: </h2>
            <h3>{detail.mood}</h3>
          </div>
          <div className='note'>
            <img src={noteIcon} width='30'/>
            <h2>Note</h2>
            <p>{detail.note}</p>
          </div>
        </div>
      }
    </div>
  )

}
