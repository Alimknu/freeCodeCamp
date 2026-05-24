const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  return `Formatted Date (MM/DD/YYYY): ${date}`;
}

function formatDateLong(date) {
  date = `${date.toLocaleString("default", { month: "long" })} ${date.getDate()}, ${date.getFullYear()}`;
  return `Formatted Date (Month Day, Year): ${date}`;
}
