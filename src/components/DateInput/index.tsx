// Input component
import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ name, error, ...rest }) => (
  <div className={cn(styles['date-input-container'], { [styles.error]: error })}>
    <label className={cn(styles['date-input-label'], {[styles.error]: error })} htmlFor={name}>{rest.label}</label>
    <input type='number' className={cn(styles['date-input'], {[styles.error]: error })} name={name} {...rest} />
    <span>{error}</span>
  </div>
);

export default Input;