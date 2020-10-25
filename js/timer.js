const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minutesEl = document.querySelector('[data-value="mins"]');
const secondsEl = document.querySelector('[data-value="secs"]');

class Timer {
  constructor({ selector, targetDate }) {
    this._selector = selector;
    this._targetDate = targetDate;
  }
  start() {
    
      let timerId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = this._targetDate - currentTime;
        this.updateTimer(deltaTime);
      }, 1000);

      if (Date.now() > this._targetDate) {
          clearInterval(timerId);
      }
     
    }
  
  updateTimer(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new Timer({
  selector: "#timer-1",
  targetDate: new Date("Jan 25, 2021"),
});

timer.start();


