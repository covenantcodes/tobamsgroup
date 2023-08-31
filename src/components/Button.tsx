import React from "react";

interface CustomButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  padding?: string;
  borderRadius?:string;
  cursor?:string
  hoverBackgroundColor?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  backgroundColor = "var(--button-color)",
  textColor = "var(--primary-color)",
  width = "24%",
  padding = "1rem",
  borderRadius ="16px",
  cursor="pointer",

}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: textColor,
    width: width,
    padding: padding,
    borderRadius: borderRadius,
    cursor: cursor,
  };

  return (
    <div className="action_button" style={buttonStyle}>
      {text}
    </div>
  );
};

export default CustomButton;
