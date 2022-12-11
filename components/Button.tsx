import React from "react";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
  backgroundColor: '#6421FF' | '#0072D2' | string;
  color: '#F9F9F9' | string;
  fontWeight: 'lighter' | 'normal' | 'bold' | string;
  marginTop?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button({ text, type, onClick, marginTop, backgroundColor, color, fontWeight, ...rest }: ButtonProps) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
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
          marginTop: marginTop,
        }}
      >{text}</button>
    </div>
  );
}