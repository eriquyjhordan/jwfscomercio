import React from "react";

import InputMask from 'react-input-mask';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  name: string;
  type: string;
  marginTop?: string;
  width?: string;
  mask?: string;
  value?: string | '';
  disable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, disable, width, onChange, value, mask, marginTop, label, name, type, ...rest }: InputProps) {
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
        <InputMask
          mask={mask || ''}
          value={value}
          onChange={onChange}
          disabled={disable}
          {...rest}
          id={name}
          type={type}
          placeholder={placeholder}
          style={{
            width: width || '32.7rem',
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