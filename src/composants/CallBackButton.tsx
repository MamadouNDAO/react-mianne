import React, { FC } from "react";

interface Props {
  className: string;
  text: string;
}

const CallBackButton: React.FC<Props> = ({ 
    className,
    text,
  }) => { 
  return (
    <button 
      className={className}
    >
    {text}
    </button>
  );
}

export default CallBackButton;