import React, { FC, ReactElement, MouseEvent } from 'react';
import classes from './EditIcon.module.css';

interface EditIconProps {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const EditIcon: FC<EditIconProps> = ({ onClick }): ReactElement => {
    return (
        <button className={classes.button} onClick={onClick}>
            <svg
                width='19'
                height='19'
                viewBox='0 0 19 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2.59456 11.7577C2.42905 11.8604 2.29054 12.0137 2.20527 12.2127L0.0839478 17.1625C-0.271648 17.9922 0.56729 18.8311 1.39701 18.4755L6.34676 16.3542C6.54573 16.2689 6.69909 16.1304 6.8018 15.9649C6.87632 15.9136 6.94724 15.8549 7.0135 15.7886L14.7917 8.01043L16.2059 6.59622L17.9737 4.82845C18.7547 4.0474 18.7547 2.78107 17.9737 2.00002L16.5594 0.585809C15.7784 -0.195239 14.5121 -0.195239 13.731 0.585809L2.77086 11.546C2.7046 11.6122 2.64583 11.6831 2.59456 11.7577ZM4.53863 12.6066L5.95284 14.0208L13.3775 6.59622L11.9632 5.182L4.53863 12.6066ZM16.5594 3.41424L14.7917 5.182L13.3775 3.76779L15.1452 2.00002L16.5594 3.41424ZM3.46173 14.3582L2.90704 15.6524L4.20131 15.0977L3.46173 14.3582Z'
                    fill='black'
                    fillOpacity='0.4'
                />
            </svg>
        </button>
    );
};
