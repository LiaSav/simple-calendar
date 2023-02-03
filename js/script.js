'use strict';

const calendarMonths = document.querySelector('.calendar__months'),
    calendarTitle = document.querySelector('.calendar__title'),
    calendarDays = document.querySelector('.calendar__days');

calendarMonths.onchange = function () {
    const choice = calendarMonths.value;
    let totalDays;

    if (choice === 'february') {
        totalDays = 28;
    } else if (choice === 'april' || choice === 'june' || choice === 'september' || choice === 'november') {
        totalDays = 30;
    } else {
        totalDays = 31;
    }

    createCalendar(totalDays, choice);
}

function createCalendar(totalDays, choice) {
    calendarDays.innerHTML = '';

    calendarTitle.textContent = choice;

    for (let i = 1; i <= totalDays; i++) {

        let calendarDay = document.createElement('li');
        calendarDay.classList.add('calendar__day');
        calendarDay.textContent = i;
        calendarDays.appendChild(calendarDay);
    }
}

createCalendar(31, 'january');