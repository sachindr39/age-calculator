/**
 * External dependencies
 */
import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

/**
 * Internal dependencies
 */
import './App.css';
import {
    getAgeYears,
    getAgeMonths,
    getAgeDays,
    getNextBirthdayWeekDay,
    getNextBirthdayMonths,
    getNextBirthdayDays,
    getSummaryYears,
    getSummaryMonths,
    getSummaryWeeks,
    getSummaryDays,
    getSummaryHours,
    getSummaryMinutes,
} from './utils/functions';

function App() {

    const [birthday, setBirthday] = React.useState(dayjs());
    const [today, settoday] = React.useState(dayjs());

    let todayString = today.format('YYYY-MM-DD')
    let birthdayString = birthday.format('YYYY-MM-DD')

    let ageYears = getAgeYears(todayString, birthdayString);
    let ageMonth = getAgeMonths(todayString, birthdayString);
    let ageDays = getAgeDays(todayString, birthdayString);
    let nextBirthdayWeekday = getNextBirthdayWeekDay(todayString, birthdayString);
    let nextBirthdayMonth = getNextBirthdayMonths(todayString, birthdayString);
    let nextBirthdayDays = getNextBirthdayDays(todayString, birthdayString);
    let summaryYears = getSummaryYears(todayString, birthdayString);
    let summaryMonth = getSummaryMonths(todayString, birthdayString);
    let summaryWeeks = getSummaryWeeks(todayString, birthdayString);
    let summaryYearsDays = getSummaryDays(todayString, birthdayString);
    let summaryYearsHours = getSummaryHours(todayString, birthdayString);
    let summaryYearsMinutes = getSummaryMinutes(todayString, birthdayString);

    return (
        <div className='age calcutator'>

            <div className='birth date'>
                <div className='calculatage'>
                    <div className='Todaydate'>
                        <div className='datepicker'>
                            <h1>Date of birth</h1>
                            <span>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <MobileDatePicker
                                            inputFormat="MMM DD, YYYY"
                                            maxDate={today}
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
                        <div className="summary-group">
                            <div className="summary-list">
                                <div className="summary-item">
                                    <div className="summary-label">Years</div>
                                    <div className="summary-count">{summaryYears}</div>
                                </div>
                                <div className="summary-item">
                                    <div className="summary-label">Month</div>
                                    <div className="summary-count">{summaryMonth}</div>
                                </div>
                                <div className="summary-item">
                                    <div className="summary-label">Weeks</div>
                                    <div className="summary-count">{summaryWeeks}</div>
                                </div>
                            </div>
                            <div className="summary-list">
                                <div className="summary-item">
                                    <div className="summary-label">days</div>
                                    <div className="summary-count">{summaryYearsDays}</div>
                                </div>
                                <div className="summary-item">
                                    <div className="summary-label">Hours</div>
                                    <div className="summary-count">{summaryYearsHours}</div>
                                </div>
                                <div className="summary-item">
                                    <div className="summary-label">Minutes</div>
                                    <div className="summary-count">{summaryYearsMinutes}</div>
                                </div>
                            </div>
                        </div>
                        <span className='summary-footer'>Devloped by Sachin Raut</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
