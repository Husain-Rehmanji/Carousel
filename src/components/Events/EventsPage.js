import React from 'react';

const EventCard = ({ image, name, description, date }) => {
  return (
    <div
      style={{
        width: '75%',
        margin: '0 auto',
        marginBottom: '2rem',
        border: '2px solid #1eb2a6',
        boxShadow: '0 12px 14px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        background: 'linear-gradient(to right, white 40%, #1eb2a6)',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <img src={image} alt="Event" style={{ width: '150px', marginRight: '2.5rem' }} />
      <div>
        <h2 style={{color: '#139c90', marginBottom: '0.7rem'}}>{name}</h2>
        <p>{description}</p>
      </div>
      <div style={{ marginLeft: 'auto', color: 'white', fontSize: '27px' }}>{date}</div>
    </div>
  );
};

const EventsPage = () => {
  return (
    <div style={{marginTop: '45rem'}}>

      <EventCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg"
        name="Event 4 - UPCOMING"
        description="Event 4 description goes here"
        date="Event 4 date"
      />
      <EventCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg"
        name="Event 3"
        description="Event 3 description goes here"
        date="Event 3 date"
      />
      <EventCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg"
        name="Event 2"
        description="Event 2 description goes here"
        date="Event 2 date"
      />
      <EventCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg"
        name="Event 1"
        description="Event 1 description goes here"
        date="Event 1 date"
      />
      {/* Add more EventCard components for additional events */}
    </div>
  );
};

export default EventsPage;
