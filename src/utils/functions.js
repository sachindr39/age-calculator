import dayjs from 'dayjs';


export const getAgeYears = (todays, birthdays) => {
    return dayjs(todays).diff(birthdays, 'years')
}

export const getAgeMonths = (todays, birthdays) => {
    let todayArr = todays.split('-');
    let birthdayArr = birthdays.split('-');
    let newBirthday = `${todayArr[0]}-${birthdayArr[1]}-${birthdayArr[2]}`;

    let Month = dayjs(todays).diff(newBirthday, 'month')
    if (Month < 0) {
        let newBirthday = `${todayArr[0] - 1}-${birthdayArr[1]}-${birthdayArr[2]}`;
        Month = dayjs(todays).diff(newBirthday, 'month')
    }

    return Month;
}

export const getAgeDays = (todays, birthdays) => {
    let todayArr = todays.split('-');
    let birthdayArr = birthdays.split('-');
    let newBirthdays = `${todayArr[0]}-${todayArr[1]}-${birthdayArr[2]}`;
    let days = dayjs(todays).diff(newBirthdays, 'days')

    if (days < 0) {
        let newBirthday = `${todayArr[0]}-${todayArr[1] - 1}-${birthdayArr[2]}`;
        days = dayjs(todays).diff(newBirthday, 'days')
    }

    return days;
}

export const getNextBirthdayWeekDay = (todays, birthdays) => {
    let todayAr = todays.split('-');
    let birthdayAr = birthdays.split('-');
    let nextBirthdayWeekday = `${todayAr[0]}-${birthdayAr[1]}-${birthdayAr[2]}`;

    let diff = dayjs(todays).diff(nextBirthdayWeekday, 'days')

    if (diff < 0) {
        nextBirthdayWeekday = `${parseInt(todayAr[0]) + 1}-${birthdayAr[1]}-${birthdayAr[2]}`;

    }
    let weekdayName = dayjs(nextBirthdayWeekday).format('dddd')

    return weekdayName;
}

export const getNextBirthdayMonths = (todays, birthdays) => {
    let todayA = todays.split('-');
    let birthdayA = birthdays.split('-');
    let nextBirthdaymonth = `${todayA[0]}-${birthdayA[1]}-${birthdayA[2]}`;

    let Month = dayjs(nextBirthdaymonth).diff(todays, 'month')

    if (Month < 0) {
        nextBirthdaymonth = `${parseInt(todayA[0]) + 1}-${birthdayA[1]}-${birthdayA[2]}`;
        Month = dayjs(nextBirthdaymonth).diff(todays, 'month')
    }
    return Month;
}

export const getNextBirthdayDays = (todays, birthdays) => {
    let todayArrs = todays.split('-');
    let birthdayArrs = birthdays.split('-');
    let nextBirthdayDays = `${todayArrs[0]}-${birthdayArrs[1]}-${birthdayArrs[2]}`;
    let nextBirthdayDaysDate = `${parseInt(todayArrs[0]) + 1}-${birthdayArrs[1]}-${birthdayArrs[2]}`;
    let nextBirthdayToday = `${parseInt(todayArrs[0]) + 1}-${birthdayArrs[1]}-${todayArrs[2]}`;

    let diffDays = dayjs(nextBirthdayDaysDate).diff(nextBirthdayToday, 'days');
    if (diffDays < 0) {
        let nextBirthdayToday = `${parseInt(todayArrs[0]) + 1}-${birthdayArrs[1]}-${todayArrs[2]}`;
        diffDays = dayjs(nextBirthdayToday).diff(nextBirthdayDaysDate, 'days');

    }

    return diffDays;
}

export const getSummaryYears = (todays, birthdays) => {
    return dayjs(todays).diff(birthdays, 'years')
}

export const getSummaryMonths = (todays, birthdays) => {
    return dayjs(todays).diff(birthdays, 'month')
}

export const getSummaryWeeks = (todays, birthdays) => {
    return dayjs(todays).diff(birthdays, 'weeks')
}

export const getSummaryDays = (todays, birthdays) => {
    return dayjs(todays).diff(birthdays, 'days')
}

export const getSummaryHours = (todays, birthdays) => {
    return dayjs(todays).diff(birthdays, 'hours')
}

export const getSummaryMinutes = (todays, birthdays) => {
    return dayjs(todays).diff(birthdays, 'minutes')
}