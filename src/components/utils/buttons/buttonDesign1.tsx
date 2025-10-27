import React from "react";

interface ButtonDesign1Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size: "sm" | "md" | "lg" | "xl";
  className?: string;
  textColor: "white" | "black" | "gray1" | "gray2";
  id?: string;
}

const ButtonDesign1: React.FC<ButtonDesign1Props> = ({
  children,
  onClick,
  size,
  className = "",
  textColor,
  id
}) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-8 py-2 text-lg",
    xl: "px-16 py-3 text-xl",
  };
  const textColorClasses = {
    white: "text-white",
    black: "text-dark",
    gray1: "text-gray-700",
    gray2: "text-gray-500",
  };

  return (
    <button 
      id={id}
      onClick={onClick}
      className={`rounded-full transition-transform duration-200 transform hover:scale-105 hover:font-bold hover:cursor-pointer ${sizeClasses[size]} ${textColorClasses[textColor]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonDesign1;
