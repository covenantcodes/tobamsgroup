import React from "react";

interface CustomButtonProps {
  text: string;
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

  return (
    <div className="action_button" data-aos="fade-in" style={buttonStyle}>
      {text}
    </div>
  );
};

export default CustomButton;
