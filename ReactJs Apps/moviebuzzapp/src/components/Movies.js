import React from 'react';

const Movies = (props) => {
    return (
        <div>
            <h2>Hero Name:{props.heroName} and Villan Name:{props.villanName}</h2>
        </div>
    );
};

export default Movies;