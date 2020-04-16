import React from 'react';
import PropTypes from 'prop-types';

//state 필요없으면 걍 function으로 만들기.

function Movie({id, year ,title, summary, poster}){
    return <h4>{title}</h4>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;