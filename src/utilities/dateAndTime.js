export const getCurrentDateAndTime = ()=>{
    const d = new Date();
    const date = new Date(d);
    const time =
      d.getMonth() +
      1 +
      '-' +
      d.getDate() +
      '-' +
      d.getFullYear() +
      ' ' +
      (d.getHours() > 12 ? d.getHours() - 12 : d.getHours()) +
      ':' +
      d.getMinutes() +
      ':' +
      d.getSeconds() +
      ' ' +
      (d.getHours() >= 12 ? 'PM' : 'AM');
return time;

}

export const procedCreatedTime = (timestring)=>{
  const [date, time1] = timestring.split('T');
  const time= time1.split('.')[0];
  return `${date} @ ${time}`;
}