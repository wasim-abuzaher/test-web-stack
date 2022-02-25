import React, { FC, ReactElement } from 'react';
import classes from './Avatar.module.css';

interface AvatarProps {
    source: string;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = ({
    source,
    alt = 'user profile avatar',
}): ReactElement => {
    return (
        <div className={classes.avatar}>
            <img src={source} alt={alt} />
        </div>
    );
};
