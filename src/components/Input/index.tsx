// Input component
import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => (
  <div className={styles.container}>
    <label className={styles.label} htmlFor={name}>{rest.label}</label>
    <input type='number' className={styles.input} name={name} {...rest} />
  </div>
);

export default Input;