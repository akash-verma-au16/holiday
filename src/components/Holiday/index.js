import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../Table';
import Filter from '../Filter';
import { getData } from '../../redux/actions/dataActions';

const Holiday = () => {
  const dispatch = useDispatch();
  const eng_wales = useSelector((state) => state.data.eng_wales);
  const [selectedRange, setSelectedRange] = useState('All');
  const [customRange, setCustomRange] = useState([null, null]);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <Filter
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
        customRange={customRange}
        setCustomRange={setCustomRange}
      />
      {eng_wales && (
        <Table
          selectedRange={selectedRange}
          customRange={customRange}
          events={eng_wales.events}
        />
      )}
    </div>
  );
};

export default Holiday;
