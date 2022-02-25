import React, { FC, ReactElement, MouseEvent } from 'react';
import classes from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
    onClick,
    variant = 'primary',
    disabled = false,
    children,
}): ReactElement => {
    return (
        <button
            className={clsx(classes.button, {
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
