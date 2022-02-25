import React, { FC, MouseEvent, ReactElement } from 'react';
import { Avatar, EditIcon } from '../../components';
import classes from './Card.module.css';
import { User } from '../../types';

interface CardProps {
    user: User;
    onEditClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Card: FC<CardProps> = ({ user, onEditClick }): ReactElement => {
    return (
        <div className={classes.card}>
            <EditIcon className={classes.editIcon} onClick={onEditClick} />
            <div className={classes.avatarDiv}>
                {/* //TODO add URL sanitization */}
                <Avatar source={user.avatarSource} />
            </div>
            <div className={classes.nameDiv}>
                <h2>{user.name}</h2>
                <p className={classes.createdP}>
                    created {/* //TODO add date formatting */}
                    <span className={classes.createdSpan}>
                        {user.createdAt}
                    </span>
                </p>
            </div>
            <p>{user.description}</p>
        </div>
    );
};
