import React, { Component } from 'react';

async function fetchImageList(dispatch) {
  const response = await fetch('https://api.thetripguru.com/tours/a-day-with-the-elephants-in-thailand');
  const json = await response.json();
  dispatch({
    type:'FETCH_IMAGE_LIST',
    payload: json,
  })
}

export default fetchImageList;