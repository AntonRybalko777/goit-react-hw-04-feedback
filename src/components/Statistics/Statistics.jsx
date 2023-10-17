import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.container}>
      <p>
        Good: <b>{good}</b>
      </p>
      <p>
        Neutral: <b>{neutral}</b>
      </p>
      <p>
        Bad:<b> {bad}</b>
      </p>
      <p>
        Total: <b>{total}</b>
      </p>
      <p>
        Positive feedback: <b>{positivePercentage}%</b>
      </p>
    </div>
  );
};
