import React from 'react';

//simply takes in a name and a rank and formats

const CrewMemeber = ({name, rank}) => (
    <div>
        <h2>{rank} {name}</h2>
    </div>
);

export default CrewMemeber;