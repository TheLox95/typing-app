export class Timmer {
  private _timeSoFar = new Date(null);
  private _interval: number;

  get currentTime() {
    return this._timeSoFar;
  }

  start() {
    let minutes = 0;
    this._interval = window.setInterval(() => {
      let seconds = Number(this._timeSoFar.toISOString().substr(17, 2));
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      this._timeSoFar = new Date(null);
      this._timeSoFar.setMinutes(minutes, seconds);
    }, 1000);
  }

  stop() {
    clearInterval(this._interval);
  }
}
