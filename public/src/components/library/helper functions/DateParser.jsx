const DateParser = (dateString) => {
  let date = Date.parse(dateString);
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth(); // getMonth returns a zero-based index of the month: 0-11
  const day = date.getDate(); // 0 - 31
  const hours = date.getHours(); // 0 - 23
  const minutes = date.getMinutes(); // 0 - 59
  const seconds = date.getSeconds(); // 0 - 59

  const addZero = (num) => `${num}`.padStart(2, '0');

  const formatted =
    year +
    '-' +
    addZero(month + 1) +
    '-' +
    addZero(day);
  return formatted;
};

export default DateParser;