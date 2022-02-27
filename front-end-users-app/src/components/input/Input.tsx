import React, { FC, ReactElement, ChangeEvent } from 'react';
import classes from './Input.module.css';
import clsx from 'clsx';

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    className?: string;
}

export const Input: FC<InputProps> = ({
    value = '',
    onChange,
    label,
    placeholder,
    className = '',
}): ReactElement => {
    return (
        <div className={clsx(classes.inputRoot, className)}>
            {label && <label className={classes.label}>{label}</label>}
            <input
                className={classes.input}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
