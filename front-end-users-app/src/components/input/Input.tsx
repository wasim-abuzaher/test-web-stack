import React, { FC, ReactElement } from 'react';
import classes from './Input.module.css';

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({
    value = '',
    onChange,
    label,
    placeholder,
}): ReactElement => {
    return (
        <div>
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
