import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map((option, idx) => (
        <button
          className={css.button}
          name={option}
          key={idx}
          onClick={evt => onLeaveFeedback(evt.target.name)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
