import { UpdateIcon } from "@radix-ui/react-icons";

const LoadingSpinner = ({
  size = "medium",
  color = "currentColor",
  className = "",
  "aria-label": ariaLabel = "Loading...",
}) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      role="status"
      aria-label={ariaLabel}
    >
      <UpdateIcon
        className={`animate-spin ${sizeClasses[size]}`}
        style={{ color }}
      />
    </div>
  );
};

export default LoadingSpinner;
