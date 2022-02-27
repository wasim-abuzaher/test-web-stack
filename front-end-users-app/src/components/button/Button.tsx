import React, { FC, ReactElement, MouseEvent } from 'react';
import classes from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    className?: string;
}

export const Button: FC<ButtonProps> = ({
    onClick,
    variant = 'primary',
    disabled = false,
    children,
    className = '',
}): ReactElement => {
    return (
        <button
            className={clsx(classes.button, className, {
                [classes.primary]: variant === 'primary',
                [classes.secondary]: variant === 'secondary',
                [classes.disabled]: disabled,
            })}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
