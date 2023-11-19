import React from 'react'

function MonthName({ monthNumber}){
const months = [
    "Januari ",
    "Februari ",
    "Mars ",
    "April ",
    "Maj ",
    "Juni ",
    "Juli ",
    "Augusti ",
    "September ",
    "Oktober ",
    "November ",
    "December "
];
const monthIndex = monthNumber -1;

if (months[monthIndex]) {
    return <span> {months [monthIndex]} </span>;
} else {
    return <span>Okänd månad</span>;
}

}

export default MonthName