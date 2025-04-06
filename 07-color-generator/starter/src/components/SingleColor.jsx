import { toast } from "react-toastify";

const SingleColor = ({ hex, weight, type }) => {
  const hexColor = `#${hex}`;

  const handleClick = () => {
    navigator.clipboard.writeText(hexColor);
    toast.success(`Copied ${hexColor}`);
  };

  return (
    <div
      className={`color ${type === "tint" ? "color-light" : ""}`}
      style={{ backgroundColor: hexColor }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
    </div>
  );
};

export default SingleColor;
