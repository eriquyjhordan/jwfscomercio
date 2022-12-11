import React from "react";

import InputMask from 'react-input-mask';

import styles from "./sytles/inputComponent.module.css";



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
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, disable, width, required, onChange, value, mask, marginTop, label, name, type, ...rest }: InputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className={styles.label}
        style={{ marginTop: marginTop || '0', }}
      >
        {label}
        <InputMask
          mask={mask || ''}
          value={value}
          onChange={onChange}
          disabled={disable}
          required={required}
          {...rest}
          id={name}
          type={type}
          placeholder={placeholder}
          className={styles.input}
          style={{ width: width || '32.7rem', }}
        />
      </label>
    </div>
  );
}