const currentDate = new Date();

const month = currentDate.getMonth(); // Месяцы начинаются с 0, поэтому прибавляем 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const dayOfWeekNumber = currentDate.getDay();

const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];

  const daysOfWeek = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ];

export const TimeDate = () => {
    return (

       ` ${day} ${months[month]}, ${daysOfWeek[dayOfWeekNumber]} ${hours}:${minutes < 10 ? `0${minutes}` : minutes} `
    )
}
