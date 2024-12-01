// Selector
const eventCountdownElement = document.querySelector('.event-countdown')
const deadlineElement = document.querySelector('.deadline')

/* Event Countdown Feature */
const daysElement = eventCountdownElement.childNodes[1]
const hoursElement = eventCountdownElement.childNodes[5]
const minsElement = eventCountdownElement.childNodes[9]
const secondsElement = eventCountdownElement.childNodes[13]

const eventDealine = new Date('12-28-2024')
deadlineElement.innerHTML = eventDealine.toDateString()
const calculateTimeRemaining = () => {
    const now = new Date()
    const timeDifference = eventDealine - now

    if (timeDifference <= 0) {
        return {
            days: '00',
            hours: '00',
            mins: '00',
            seconds: "00"
        }
    }
    const totalSeconds = Math.floor(timeDifference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const days = String(totalDays).padStart(2, "0");
    const hours = String(totalHours % 24).padStart(2, "0");
    const mins = String(totalMinutes % 60).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return {
        days,
        hours,
        mins,
        seconds
    };
}

setInterval(() => {
    const timeRemaining = calculateTimeRemaining()
    daysElement.innerHTML = `
<span class="count">${timeRemaining?.days[0]}</span>
<span class="count">${timeRemaining?.days[1]}</span>
`
    hoursElement.innerHTML = `
<span class="count">${timeRemaining?.hours[0]}</span>
<span class="count">${timeRemaining?.hours[1]}</span>
`
    minsElement.innerHTML = `
<span class="count">${timeRemaining?.mins[0]}</span>
<span class="count">${timeRemaining?.mins[1]}</span>
`
    secondsElement.innerHTML = `
<span class="count">${timeRemaining?.seconds[0]}</span>
<span class="count">${timeRemaining?.seconds[1]}</span>
`
}, 1000)
