import React from 'react';
import './Statistics.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="statTitle">{title}</h2>}
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
