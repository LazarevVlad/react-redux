import React from 'react';
import PropTypes from 'prop-types';

export default function Page(props) {
  const { year, photos, setYear } = props;

  function onBtnClick(e) {
    const year = +e.currentTarget.innerText
    setYear(year)
  }

  return(
    <div>
        <div>
          <button onClick={onBtnClick}>2018</button>
          <button onClick={onBtnClick}>2017</button>
          <button onClick={onBtnClick}>2016</button>
          <button onClick={onBtnClick}>2015</button>
          <button onClick={onBtnClick}>2014</button>
        </div>
        <p>
          У тебя {photos.length} фото за {year} год
        </p>
      </div>
  )
};

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
};