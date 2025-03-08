import { ReactNode } from 'react';
import '../styles/components/CustomSelect.css';

interface CustomSelectProps {
  label: string;
  icon: ReactNode;
  options: string[];
  value: string;
}

export const CustomSelect = ({ label, icon, options, value}: CustomSelectProps) => {
  return (
    <div id="custom-select">
      {icon}
      <div className="select-content">
        <label>{label}</label>
        <select value={value}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};