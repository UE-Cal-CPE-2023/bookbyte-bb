const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dateString = $("Value");
const date = new Date(dateString);
const day = String(date.getDate());
// monthNamesShort[date.getMonth()] is used to get the month name from the array
const month = monthNamesShort[date.getMonth()];
const year = String(date.getFullYear());

return `${month} ${day}, ${year}`;