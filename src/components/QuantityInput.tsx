// QuantityInput.tsx
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import '../styles/components/QuantityInput.css';

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const QuantityInput = ({ value, onChange }: QuantityInputProps) => {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => onChange(Math.max(1, value - 1));

  return (
    <div id="quantity-input">
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(Math.max(1, parseInt(e.target.value) || 1))}
        className="quantity-input"
      />
      <div className="quantity-controls">
        <button
          type="button"
          className="quantity-button"
          onClick={handleIncrement}
        >
          <MdOutlineArrowDropUp className="quantity-icon" />
        </button>
        <button
          type="button"
          className="quantity-button"
          onClick={handleDecrement}
        >
          <MdOutlineArrowDropDown className="quantity-icon" />
        </button>
      </div>
    </div>
  );
};