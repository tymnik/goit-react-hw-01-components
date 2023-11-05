import React from 'react';
import data from '../json/data.json';
import styles from './Statistics.css';

const Statistics = () => {
  const { title, stats } = data;

  return (
    <section className="statistics">
      <h2 className="statTitle">
        Upload stats{title && <h2>{title}</h2>}
      </h2>
      <ul className="statList">
        {data.map(stat => (
          <li key={stat.id} className="item">
            <span className="statLabel">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
