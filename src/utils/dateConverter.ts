import moment from "moment";

export const dateConverter = (date: string) => {
  console.log("date", date);
  const formattedDate = moment(date).format("MMMM DD, YYYY [at] h:mm:ss a");

  return formattedDate;
};
