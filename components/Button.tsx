import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  backgroundColor: '#6421FF' | '#0072D2' | string;
  color: '#F9F9F9' | string;
  fontWeight: 'lighter' | 'normal' | 'bold' | string;
}

export default function Button({ text, backgroundColor, color, fontWeight, ...rest }: ButtonProps) {
  return (
    <div>
      <button
        {...rest}
        style={{
          backgroundColor: backgroundColor,
          color: color,
          fontWeight: fontWeight,
          width: '100%',
          maxWidth: '32.7rem',
          padding: '0 14rem',
          height: '5rem',
          display: 'block',
          border: 'none',
          fontSize: '1.5rem',
          textAlign: 'center',
          lineHeight: '5rem',
          borderRadius: '0.4rem',
        }}
      >{text}</button>
    </div>
  );
}