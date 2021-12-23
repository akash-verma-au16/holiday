import './filter.css';
import React, { Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';

const Filter = ({
  selectedRange,
  setSelectedRange,
  customRange,
  setCustomRange,
}) => {
  return (
    <div className="filter-head">
      <label className="label">Filter By:</label>
      <Autocomplete
        options={[
          'All',
          'Yesterday',
          'Last Week',
          'Last Month',
          'Last Six Months',
          'Last Year',
          'Custom Range',
        ]}
        getOptionLabel={(option) => option}
        value={selectedRange}
        disableClearable={true}
        className="filter-dropdown"
        onChange={(e, newValue) => {
          setSelectedRange(newValue);
          setCustomRange([null, null]);
        }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" size="small" />
        )}
      />
      {selectedRange === 'Custom Range' && (
        <Fragment>
          <label className="label-2">Custom Range:</label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="From"
              endText="To"
              value={customRange}
              onChange={(newValue) => {
                setCustomRange(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </Fragment>
      )}
    </div>
  );
};

export default Filter;
