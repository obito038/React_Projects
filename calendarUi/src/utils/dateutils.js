
import moment from "moment";

export const  getDatesOfWeek = function(weekNumber) {
    let currentDate = moment(moment().clone().startOf("isoWeek"));
  
    let startDate = currentDate
      .clone()
      .startOf("isoWeek")
      .add(weekNumber, "weeks");
      
    let datesOfWeek = [];
    for (let i = 0; i < 7; i++) {
      datesOfWeek.push(startDate.clone().add(i, "days").format("YYYY-MM-DD"));
    }
    return datesOfWeek;
  }
