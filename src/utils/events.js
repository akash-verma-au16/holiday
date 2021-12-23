const filterByRange = (events, range) => {
  const start = range[0].getTime();
  const end = range[1].getTime();
  return events.filter((item) => {
    let d = new Date(item.date);
    let time = d.getTime();
    return start < time && end > time;
  });
};

const getFilterDate = (date) => {
  const now = new Date();
  switch (date) {
    case 'Yesterday':
      return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    case 'Last Week':
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case 'Last Month':
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    case 'Last Six Months':
      return new Date(now.getTime() - 183 * 24 * 60 * 60 * 1000);
    case 'Last Year':
      return new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
    default:
      return;
  }
};

export const filterBy = (events, filter, range) => {
  if (range[0] && range[1]) {
    return filterByRange(events, range);
  } else if (filter !== 'All' && filter !== 'Custom Range') {
    const end = new Date();
    const start = getFilterDate(filter);
    return filterByRange(events, [start, end]);
  }
  return events;
};

export const sortEvents = (events) => {
  events.sort((a, b) => {
    let keyA = new Date(a.date),
      keyB = new Date(b.date);
    // Compare the 2 dates
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  });
  return events;
};
