import moment from 'moment';

export interface Range {
  start: string;
  end: string;
}

export const getDates = (range: Range) => {
  const dateArray = [];
  const currentDate = moment(range.start, 'DD-MM-YYYY');
  const stopDate = moment(range.end, 'DD-MM-YYYY');
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format("DD-MM-YYYY"));
    currentDate.add(1, "days");
  }
  console.log(dateArray);
  return dateArray;
}