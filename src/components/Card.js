import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="card text-3xl py-8">
      <h1>{ title }</h1>
    </div>
  );
};

export default Card;
