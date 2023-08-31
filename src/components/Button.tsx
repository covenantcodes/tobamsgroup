import React from "react";

interface CustomButtonProps {
  text: string;
  className?: string; // Allow setting a custom class name
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  padding?: string;
  responsivePadding?: string;
  borderRadius?: string;
  cursor?: string;
  hoverBackgroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  className = "", // Default to an empty string if not provided
  backgroundColor = "var(--button-color)",
  textColor = "var(--primary-color)",
  width = "24%",
  padding = "1rem",
  responsivePadding = "0.8rem", 
  borderRadius = "16px",
  cursor = "pointer",
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: textColor,
    width: width,
    padding: padding,
    borderRadius: borderRadius,
    cursor: cursor,
  };

  // Media query for smaller screens
  const mediaQuery = window.matchMedia("(max-width: 1106px)");
  if (mediaQuery.matches) {
    buttonStyle.padding = responsivePadding;
  }
  // Combine the provided class name with the default class name
  const combinedClassName = `action_button ${className}`;

  return (
    <div className={combinedClassName} data-aos="fade-in" style={buttonStyle}>
      {text}
    </div>
  );
};

export default CustomButton;
