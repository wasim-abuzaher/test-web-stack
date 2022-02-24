import React, { FC, ReactElement } from 'react';
import classes from './Card.module.css';

export const Card: FC = ({ children }): ReactElement => {
    return <div className={classes.card}>{children}</div>;
};
