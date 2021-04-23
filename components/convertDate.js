const convertDate = (date) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export default convertDate;
