

export function convertDateAndTime(timeString,returnValue){
    let [date,time] = timeString.split("T")
    return returnValue == 'date' ? date : time;
}