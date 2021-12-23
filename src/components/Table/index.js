import './table.css';
import React, { useState, useEffect } from 'react';
import { filterBy, sortEvents } from '../../utils/events';

const Table = ({ events, selectedRange, customRange }) => {
  const [filteredEvents, setFilteredEvents] = useState(sortEvents(events));

  useEffect(() => {
    setFilteredEvents(sortEvents(filterBy(events, selectedRange, customRange)));
  }, [filteredEvents, customRange, selectedRange, events]);

  return (
    <div className="table">
      <div className="title">
        <h2>Holidays</h2>
        <p>Total: {filteredEvents.length}</p>
      </div>
      <ol className="list">
        {filteredEvents.length ? (
          filteredEvents.map((item, i) => (
            <li key={'item-' + i} className="list-item">
              <span>{item.title}</span>
              <span>{` - ${item.date}`}</span>
            </li>
          ))
        ) : (
          <li className="list-item">
            <span>No Holidays in the given time span</span>
          </li>
        )}
      </ol>
    </div>
  );
};

export default Table;
