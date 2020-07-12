export function getShortDate(date : Date) : String {
    let monthNumber = date.getUTCMonth() + 1;
    let yearNumber = date.getFullYear();
    let shortMonth = '';
    if (monthNumber === 1) shortMonth = 'Jan';
    else if (monthNumber === 2) shortMonth = 'Feb';
    else if (monthNumber === 3) shortMonth = 'Mar';
    else if (monthNumber === 4) shortMonth = 'Apr';
    else if (monthNumber === 5) shortMonth = 'May';
    else if (monthNumber === 6) shortMonth = 'Jun'; 
    else if (monthNumber === 7) shortMonth = 'Jul';
    else if (monthNumber === 8) shortMonth = 'Aug';
    else if (monthNumber === 9) shortMonth = 'Sep';
    else if (monthNumber === 10) shortMonth = 'Oct';
    else if (monthNumber === 11) shortMonth = 'Nov';
    else if (monthNumber === 12) shortMonth = 'Dec';
    return shortMonth + ' ' + yearNumber;
}