export  function convertDateToTimeLapse(timestamp) {
    let dateOfPost = new Date(timestamp)
    const rtf = new Intl.RelativeTimeFormat('en', {
        numeric: 'auto',
    });
    const differenceBetweenDates = dateOfPost - new Date().getTime() ;
    const oneDayInMs = 1000 * 60 * 60 * 24;
    const oneWeekInMs = oneDayInMs * 7;
    const oneMonthInMs = oneDayInMs * 30;
    const oneYearInMs = oneMonthInMs * 12;

    if(Math.abs(differenceBetweenDates) > oneYearInMs){
        const yearsDifference = Math.round(
            (differenceBetweenDates) / oneYearInMs,
        );
        return rtf.format(yearsDifference, 'year');
    }
    if(Math.abs(differenceBetweenDates) > oneMonthInMs){
        const monthsDifference = Math.round(
            (differenceBetweenDates) / oneMonthInMs,
        );
        return rtf.format(monthsDifference, 'month');
    }

    if(Math.abs(differenceBetweenDates) > oneWeekInMs){
        const weeksDifference = Math.round(
            (differenceBetweenDates) / oneWeekInMs,
        );
        return rtf.format(weeksDifference, 'week');
    }

    if(Math.abs(differenceBetweenDates) > oneDayInMs){
        const daysDifference = Math.round(
            (differenceBetweenDates) / oneDayInMs,
        );
        return rtf.format(daysDifference, 'day');
    }


}
