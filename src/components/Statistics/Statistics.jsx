import React from 'react';
import './Statistics.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="statTitle">{title && <h2>{title}</h2>}</h2>
      <ul className="statList">
        {stats.map(stat => (
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
