import PropTypes from 'prop-types';

function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button>
          Start Challenge
        </button>
      </p>
      <p className="">
        Time is running... / Timer inactive
      </p>
    </section>
  );
}

TimerChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  targetTime: PropTypes.number.isRequired,
};

export default TimerChallenge;
