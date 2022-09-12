import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { color } from '@mui/system';
import { weekdays } from 'moment/moment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

// getAgeMonth
// getAgeDays
// getNextBirthdayWeekday
// getNextBirthdayMonth
// getNextBirthdayDays
// getSummaryYears
// getSummaryMonth
// getSummaryWeeks
// getSummaryYearsDays
// getSummaryYearsHours
// getSummaryYearsMinutes

let current = new Date();
let date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


const getAgeYears = ( todays, birthdays ) => {
    return dayjs(todays).diff(birthdays, 'years')
}

const getAgeMonth = ( todays, birthdays ) => {
    let todayArr = todays.split('-');
    let birthdayArr = birthdays.split('-');
    let newBirthday = `${todayArr[0]}-${birthdayArr[1]}-${birthdayArr[2]}`;

    let Month = dayjs(todays).diff(newBirthday, 'month')
    if( Month < 0 ) {
        let newBirthday = `${todayArr[0] - 1}-${birthdayArr[1]}-${birthdayArr[2]}`;
        Month = dayjs(todays).diff(newBirthday, 'month')
    }
    
    return Month;
}

const getAgeDays = ( todays, birthdays ) => {
    let todayArr = todays.split('-');
    let birthdayArr = birthdays.split('-');
    let newBirthdays = `${todayArr[0]}-${birthdayArr[1]}-${birthdayArr[2]}`;
    let days = dayjs(todays).diff(newBirthdays, 'days')

    if( days < 0 ) {
        let newBirthday = `${todayArr[0]}-${todayArr[1]-1}-${birthdayArr[2]}`;
        days = dayjs(todays).diff(newBirthday, 'days')
    }

    return days;
}

const getNextBirthdayWeekday = ( todays, birthdays ) => {
    let todayAr = todays.split('-');
    let birthdayAr = birthdays.split('-');
    let nextBirthdayWeekday = `${todayAr[0]}-${birthdayAr[1]}-${birthdayAr[2]}`;
    
    let diff = dayjs(todays).diff(nextBirthdayWeekday, 'days')

    if( diff > 0) {
        nextBirthdayWeekday = `${parseInt(todayAr[0]) + 1}-${birthdayAr[1]}-${birthdayAr[2]}`;

    }
    let weekdayName = dayjs(nextBirthdayWeekday).format ('dddd')

    return weekdayName;
}

const getNextBirthdayMonth = ( todays, birthdays ) => {
    let todayA = todays.split('-');
    let birthdayA = birthdays.split('-');
    let nextBirthdaymonth = `${todayA[0]}-${birthdayA[1]}-${birthdayA[2]}`;
    
    let Month = dayjs(nextBirthdaymonth).diff(todays, 'month')

    if( ! Month > 0) {
        nextBirthdaymonth = `${parseInt(todayA[0]) + 1}-${birthdayA[1]}-${birthdayA[2]}`;
        Month = dayjs(nextBirthdaymonth).diff(todays, 'month')
    }
    return Month;
}

const getNextBirthdayDays = ( todays, birthdays) => {
    let todayArrs = todays.split('-');
    let birthdayArrs = birthdays.split('-');
    let nextBirthdayDays = `${todayArrs[0]}-${birthdayArrs[1]}-${birthdayArrs[2]}`;
    let nextBirthdayDaysDate = `${parseInt(todayArrs[0]) + 1}-${birthdayArrs[1]}-${birthdayArrs[2]}`;
    let nextBirthdayToday = `${parseInt(todayArrs[0]) + 1}-${birthdayArrs[1]}-${todayArrs[2]}`;
   
    let diffDays = dayjs(nextBirthdayDaysDate).diff(nextBirthdayToday, 'days');
    
    return diffDays;
}

const getSummaryYears = ( todays, birthdays ) => {
    return dayjs(todays).diff(birthdays, 'years')
}

    const getSummaryMonth = ( todays, birthdays ) => {
    return dayjs(todays).diff(birthdays, 'month')
}

const getSummaryWeeks = ( todays, birthdays ) => {
    return dayjs(todays).diff(birthdays, 'weeks')
}

const getSummaryDays = ( todays, birthdays ) => {
    return dayjs(todays).diff(birthdays, 'days')
}

const getSummaryHours = ( todays, birthdays ) => {
    return dayjs(todays).diff(birthdays, 'hours')
}

const getSummaryMinutes = ( todays, birthdays ) => {
    return dayjs(todays).diff(birthdays, 'minutes')
}

export default function ViewsDatePicker(){

    const [birthday, setBirthday] = React.useState(dayjs('2010-10-16'));
    const [today, settoday] = React.useState(dayjs());
    // const today = dayjs(new Date('2022-09-01'));

    let todays = today.format('YYYY-MM-DD')
    let birthdays = birthday.format('YYYY-MM-DD')

    let ageYears = getAgeYears(todays, birthdays);
    let ageMonth = getAgeMonth(todays, birthdays);
    let ageDays = getAgeDays(todays, birthdays);
    let nextBirthdayWeekday = getNextBirthdayWeekday(todays, birthdays);
    let nextBirthdayMonth = getNextBirthdayMonth(todays, birthdays);

    let nextBirthdayDays = getNextBirthdayDays(todays, birthdays);

    let summaryYears = getSummaryYears(todays, birthdays);
    
    let summaryMonth = getSummaryMonth(todays, birthdays);
    
    let summaryWeeks = getSummaryWeeks(todays, birthdays);
   
    let summaryYearsDays = getSummaryDays(todays, birthdays);
   
    let summaryYearsHours = getSummaryHours(todays, birthdays);
   
    let summaryYearsMinutes = getSummaryMinutes(todays, birthdays);


    return  (
        <>
            <div className='calculatage'>
                <div className='Todaydate'>
                   <div className='datepicker'>
                   <h1>Date of birth</h1>
                    <span>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <Stack spacing={3}>
                    <MobileDatePicker
                        inputFormat="MMM DD, YYYY"
                        value={birthday}
                        onChange={(newValue) => {
                            console.log(newValue);
                            setBirthday(newValue);
                            console.log(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                 </Stack>
             </LocalizationProvider>
                    </span>
                   </div>
                    <div className='todays'>
                        <h1>Today</h1>
                        <span>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <Stack spacing={3}>
                    <MobileDatePicker
                        inputFormat="MMM DD, YYYY"
                        value={today}
                        onChange={(newValue) => {
                            console.log(newValue);
                            settoday(newValue);
                            console.log(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                 </Stack>
             </LocalizationProvider>
                    </span>
                    </div>
                </div>
                </div> 
                <div className='block'>
                    <div className='blockchild'>
                        <div className='content'>
                            <h2>Age</h2>
                           <div className='span'>
                                <h5>{ageYears} </h5> 
                                <p>years</p>
                           </div>
                            <h6>{ageMonth} months | {ageDays} days</h6>
                        </div>
                        <div className='nextbirthday'>
                            <h3>Next birthday</h3>
                            <svg version="1.1" viewBox="0 0 512 512">
                            <path
                                d="M479.912,426.193V284.714V269.51v-39.75c0-45.642-37.132-82.774-82.774-82.774h-34.33v-39.619    c15.49-3.889,27.102-19.391,27.102-37.879c0-31.528-30.141-46.307-31.425-46.921l-3.28-1.568l-3.28,1.568    c-1.283,0.613-31.425,15.392-31.425,46.921c0,18.489,11.612,33.99,27.103,37.879v39.619h-84.001v-39.619    c15.49-3.889,27.102-19.391,27.102-37.879c0-31.528-30.14-46.307-31.425-46.921L256,20.998l-3.28,1.568    c-1.283,0.613-31.425,15.392-31.425,46.921c0,18.489,11.612,33.99,27.103,37.879v39.619h-84.002v-39.619    c15.49-3.889,27.102-19.391,27.102-37.879c0-31.528-30.141-46.307-31.425-46.921l-3.28-1.568l-3.28,1.568    c-1.283,0.613-31.425,15.392-31.425,46.921c0,18.489,11.612,33.99,27.103,37.879v39.619h-34.33    c-45.642,0-82.774,37.132-82.774,82.774v39.75v15.204v141.479H0v64.809h512v-64.809H479.912z M335.706,69.488    c0-16.957,13.174-27.327,19.498-31.327c6.338,4.01,19.501,14.377,19.501,31.327c0,13.027-8.748,23.626-19.5,23.626    C344.454,93.112,335.706,82.515,335.706,69.488z M236.5,69.488c0-16.958,13.176-27.328,19.499-31.327    c6.338,4.01,19.501,14.377,19.501,31.327c0,13.027-8.748,23.626-19.499,23.626C245.248,93.112,236.5,82.515,236.5,69.488z     M137.294,69.488c0-16.957,13.175-27.327,19.498-31.327c6.338,4.01,19.501,14.377,19.501,31.327    c0,13.027-8.748,23.626-19.5,23.626C146.042,93.112,137.294,82.515,137.294,69.488z M114.863,162.19h282.274    c37.258,0,67.57,30.312,67.57,67.57v39.75H47.293v-39.75h0C47.293,192.502,77.605,162.19,114.863,162.19z M496.797,475.797    L496.797,475.797H15.204v-34.4h16.884h60.718v-15.205H47.293V284.714h417.414v15.208H256v15.205h208.707v15.208H355.206v15.204    h109.501v80.655H113.081v15.205h366.832h16.884V475.797z" />
                            </svg>
                            <h5>{nextBirthdayWeekday}</h5> 
                            <h6>{nextBirthdayMonth} months | {nextBirthdayDays} days</h6> 
                        </div> 
                    </div>
            
                <div className='summary'>
                        <h2>Summary</h2>
                        <div className='total'>
                            <div class="sub">
                        <div class="leftdiv">
                            <p>Years</p>
                            <h4>{summaryYears}</h4>
                            <p>Days</p>
                            <h3>{summaryYearsDays}</h3>
                        </div>
                        <div class="middlediv">
                            <p>Months</p>
                            <h4>{summaryMonth}</h4>
                            <p>Hours</p>
                            <h3>{summaryYearsHours}</h3>
                        </div>    
                        <div class="rightdiv">
                            <p>Weeks</p>
                            <h4>{summaryWeeks}</h4>
                            <p>Minutes</p>
                            <h3>{summaryYearsMinutes}</h3>
                        </div>
                            </div>

                            <span>Powered by Mi Calculator</span>

                        </div>
                       
                </div> 
            </div>
         </>
    );
}


//  function oViewsDatePicker() {


    





//     const [birthday, setBirthday] = React.useState(dayjs('2010-10-16'));
//     const today = dayjs(new Date('2022-09-01'));
    
//     var years = dayjs(today).diff(birthday, 'years') || 0;
//     var month = dayjs(today).diff(birthday, 'month') || 0;
//     var Weeks = dayjs(today).diff(birthday, 'Weeks') || 0;
//     var days = dayjs(today).diff(birthday, 'days') || 0;
//     var Hours = dayjs(today).diff(birthday, 'Hours') || 0;
//     var Minutes = dayjs(today).diff(birthday, 'Minutes') || 0;

//     let birthdayYear = birthday.format('YYYY')
//     let birthdayMonth = birthday.format('MM')
//     let birthdayDay = birthday.format('DD')
//     // let birthdayDayName = birthday.format('dddd')
//     let currentYear = dayjs().format('YYYY');

//     let currentMonthBirthday = `${currentYear}-${birthdayMonth}-${birthdayDay}`

//     let noyears = dayjs(today).diff(currentMonthBirthday, 'years') || 0;
//     let nomonth = dayjs(today).diff(currentMonthBirthday, 'month') || 0;
//     let noWeeks = dayjs(today).diff(currentMonthBirthday, 'Weeks') || 0;
//     let noHours = dayjs(today).diff(currentMonthBirthday, 'Hours') || 0;
//     let noMinutes = dayjs(today).diff(currentMonthBirthday, 'Minutes') || 0;

//     let thisMonthSameDay = `${currentYear}-${dayjs(today).format('MM')}-${birthdayDay}`

//     let lastMonth = dayjs(thisMonthSameDay).subtract(1, 'month');
//     let nodays = dayjs(today).diff(lastMonth, 'days') || 0;

//     thisMonthSameDay = `${currentYear}-${birthdayMonth}-${dayjs(thisMonthSameDay).format('DD')}`

//     let lastYear = dayjs(thisMonthSameDay).subtract(1, 'year');

//     nomonth = dayjs(lastMonth).diff(lastYear, 'month') || 0;

//     if (nomonth >= 12) {
//         lastYear = `${currentYear}-${birthdayMonth}-${birthdayDay}`
//         nomonth = dayjs(lastMonth).diff(lastYear, 'month') || 0;
//     }
//     // console.log('No Months', nomonth);

//     //-----------//

//     let nextBirthday = dayjs().add(1, 'year').format('YYYY');

//     // console.log(nextBirthday);

//     let nextBirthdayDate = `${nextBirthday}-${birthdayMonth}-${birthdayDay}`
//     // console.log('nextBirthdayDate', nextBirthdayDate); // 2023-08-16

//     // console.log(nextBirthdayDate);
//     // let lnextYear = dayjs(thisMonthSameDay).subtract(1, 'year');

//     // let diff = dayjs(today).diff(nextBirthdayDate, 'month') || 0;
//     // console.log(diff);

//     let dateToday = today
//     // console.log(today);
//     let dateNextyearToday = dateToday.add(1, 'year')

//     let nextYearToday = dateNextyearToday.subtract(1, 'day').format('YYYY-MM-DD')

//     let totalDays = dayjs(nextBirthdayDate).diff(nextYearToday, 'days') || 0;

//     console.log('totalDays', totalDays);
//     console.log('nextBirthdayDate', nextBirthdayDate);
//     console.log('today', nextYearToday);

//     let nextbirthdayMonth = dayjs(nextBirthdayDate).diff(today, 'month') || 0;

//     console.log('nextbirthdayMonth', nextbirthdayMonth); // 11 month

//     // console.log(nextbirthdayMonth);

//     // let dateToday = today
//     // let dateNextyearToday = dateToday.add(1, 'year')
//     // let nextYearToday = dateNextyearToday.format('YYYY-MM-DD')

//     // console.log(nextYearToday); // 2023-09-01

//     // let noNextyear = dayjs(nextYearToday).diff(nextBirthdayDate, 'years') || 0;
//     // let noNextMontb = dayjs(today).diff(nextYearToday, 'month') || 0;
//     // let nomontdays = dayjs(nextYearToday).diff(nextBirthdayDate, 'days') || 0;

//     // console.log(today);
//     // console.log(noNextyear);
//     // console.log(nomontdays);  // 16 days
//     // console.log(noNextMontb); // 11 month

//     // let thisMonthSameDays = `${nextBirthday}-${dayjs(today).format('MM')}-${birthdayDay}`
//     // console.log(thisMonthSameDays);  // 2023-09-16

//     // let lastMonths = dayjs(nextYearToday).subtract(1, 'days');
//     // let format = lastMonths.format('YYYY-MM-DD');
//     // console.log(format); // 2023-08-16

//     // let nosdays = dayjs(today).diff(lastMonths, 'days') || 0;

//     // console.log(lastMonths); //2023-08-31
//     // console.log(nosdays);
//     // console.log(birthday.day());

//     // let nextToLastYear = dayjs(thisMonthSameDays).subtract(1, 'year');
//     // console.log('next Year', nextToLastYear.format('YYYY-MM-DD'));

//     // console.log('Last Month ', lastMonths.format('YYYY-MM-DD'))  // 2023-08-16
//     // noNextMontb = dayjs(lastMonths).diff(nextToLastYear, 'month') || 0;

//     // console.log(noNextMontb); // 11 month

//     // if (noNextMontb >= 12) {
//     //     nextToLastYear = `${nextBirthday}-${birthdayMonth}-${birthdayDay}`
//     //     noNextMontb = dayjs(lastMonths).diff(nextToLastYear, 'month') || 0;
//     // }

//     // console.log('No Months', noNextMontb);

//     return (
//         <>
//             <h2>Today: {dayjs(today).format('DD MMMM YYYY')}</h2>

//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <Stack spacing={3}>
//                     <DatePicker
//                         openTo="year"
//                         views={['year', 'month', 'day']}
//                         label="Year and Month"
//                         inputFormat="DD MMMM YYYY"
//                         value={birthday}
//                         onChange={(newValue) => {
//                             console.log(newValue);
//                             setBirthday(newValue);
//                             console.log(newValue);
//                         }}
//                         renderInput={(params) => <TextField {...params} helperText={null} />}
//                     />

//                 </Stack>
//             </LocalizationProvider>

//             <div className='calculat age'>
//                 <div className='age'>
//                     <h1>Age</h1>
//                     <h3>{years} years</h3>
//                     <h4>{nomonth} month | {nodays} days</h4>
//                 </div>
//                 <div>
//                     <h3>Next birthday</h3>
//                     <h5>{nextbirthdayMonth} Months | {totalDays} days</h5>
//                 </div>
//             </div>
//             <div className='summary'>
//                 <h2>Summary</h2>
//                 <h5> Years Months Weeks</h5>
//                 <h3>{years} {month} {Weeks}</h3>
//                 <h5> Days Hours Minutes</h5>
//                 <h3>{days} {Hours} {Minutes}</h3>
//             </div>
//         </>
//     );
// }
