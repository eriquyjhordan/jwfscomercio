import React from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  name: string;
  type: string;
  marginTop?: string;
}

export default function Input({ placeholder, marginTop, label, name, type, ...rest }: InputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          display: 'block',
          fontSize: '1.6rem',
          color: '#CACACA',
          fontWeight: 'normal',
          textAlign: 'start',
          marginTop: marginTop || '0',
        }}
      >
        {label}
        <input
          {...rest}
          id={name}
          type={type}
          placeholder={placeholder}
          style={{
            width: '32.7rem',
            height: '4.6rem',
            display: 'block',
            border: 'none',
            fontSize: '1.5rem',
            textAlign: 'start',
            lineHeight: '5rem',
            borderRadius: '0.4rem',
            backgroundColor: '#E8F0FE',
            color: '#292E3F',
            fontWeight: 'normal',
            marginTop: '0.8rem',
            paddingInline: '1.2rem',
            outline: 'none',
          }}
        />
      </label>
    </div>
  );
}