import React from 'react';

interface MovieProps {
    id: number,
}

const Movie = ({ id }: MovieProps) => (
  <div>
    {id}
  </div>
);

export default Movie;
