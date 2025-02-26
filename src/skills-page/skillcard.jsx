import React from 'react';
import "./skills.css";

const SkillCard = ({ name, proficiency, description, icon, isExtraSkill}) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = (proficiency / 100) * circumference;

  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">
          {icon}
        </div>
        <h3 className="skill-name">{name}</h3>
      </div>
      
      <p className="skill-description">{description}</p>
      {!isExtraSkill && (
        <div className="circular-progress">
        <svg className="progress-ring" viewBox="0 0 80 80">
        <circle
            className="progress-ring-circle"
            cx="40"
            cy="40"
            r={radius}
        />
        <circle
            className="progress-ring-circle-fill"
            cx="40"
            cy="40"
            r={radius}
            strokeDasharray={`${strokeDasharray} ${circumference}`}
            strokeDashoffset="0"
        />
        </svg>
        <span className="progress-text">{proficiency}%</span>
        </div>
      )}
      
    </div>
  );
}

export default SkillCard;