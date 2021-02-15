import { 
  FullYear,
  PartialYear,
  FullMonth,
  PartialMonth,
  NumberMonth,
  DayOfTheMonth,
  DayOfTheWeek,
  Day,
  Hour24,
  Hour,
  Minutes,
  Seconds,
  PostOrAnteMeridiem,
  UserText
 } from './subs.js';

 const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "November",
   "December"
 ];

 const days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
 ];

//  takes integer and pads with zero
 function padWithZeros(int) {
   return int < 10 ? '0' + int : int;  
 }

//  add suffix to day 12 => 12th
function suffix(int) {
  if(int % 10 == 1 && int != 11){
    return int + 'st';
  }else if(int % 10 == 2 && int != 12){
    return int + 'nd'
  }else if (int % 10 == 3 && int != 13){
    return int + 'rd';
  }
  return int + 'th';
}

export default function compiler(tokens, date, options) {
  const year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  let compiled = '';
  let index = 0;
  console.log(options);
  while (index < tokens.length) {
    const token = tokens[index];
    switch (token.t) {
      case UserText:
        // if it is user text push it to compiled text
        compiled += token.v;
        break;
      case Day: 
        compiled += suffix(day);
        break;
      case DayOfTheWeek:
        compiled += days[date.getDay()];
        break;
      case DayOfTheMonth:
        compiled += options.padDays ? padWithZeros(day) : day;
        break;
      case PartialMonth:
        compiled += months[month].slice(0,3);
        break;
      case NumberMonth:
        compiled += options.padMonth ? padWithZeros(month+1) : month+1;
        break;
      case FullMonth:
        compiled += months[month];
        break;
      case PartialYear:
        compiled += String(year).slice(2);
        break;
      case FullYear:
        compiled += year;
        break;
      case Hour24:
          compiled += hrs;
          break;
      case Hour:
          let hour = hrs === 0 || hrs === 12 ? 12 : hrs % 12;
          if(options.padHours){
            hour = padWithZeros(hour);
          }
          compiled += hour;
          break;
      case Minutes:
          compiled += padWithZeros(min)
          break;
      case Seconds:
          compiled += padWithZeros(sec)
          break;
      case PostOrAnteMeridiem:
          compiled += hrs >= 12 ? 'PM' : 'AM';
          break;
    }
    index++;
  }
  return compiled;
}