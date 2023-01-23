import React from 'react';
import { tours} from '../data';
import Title from './Title';
import Tour from './Tour';

export default function Tours () {
  
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />
    
      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}
      </div>
    </section>
  
  );
};