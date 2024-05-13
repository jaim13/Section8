import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

//let timer;

function TimerChallenge({ title, targetTime }) {
    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false)
    

    function handleStart (){
        timer.current = setTimeout(() => {
            setTimeExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' :'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}

TimerChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  targetTime: PropTypes.number.isRequired,
};

export default TimerChallenge;
