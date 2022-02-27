import React, {
    ChangeEvent,
    FC,
    ReactElement,
    useEffect,
    useState,
} from 'react';
import classes from './Modal.module.css';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import { User } from '../../types';
import clsx from 'clsx';

interface ModalProps {
    open: boolean;
    onSave: (user: User) => void;
    onCancel: () => void;
    user: User | null;
}

export const Modal: FC<ModalProps> = ({
    open,
    user,
    onSave,
    onCancel,
}): ReactElement => {
    const [editUser, setEditUser] = useState<User | null>(null);

    useEffect(() => {
        setEditUser(user);
    }, [user]);

    /* ######## FUNCTIONS ######## */
    const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (editUser) {
            setEditUser({ ...editUser, name: event.target.value });
        }
    };

    const onUserAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (editUser) {
            setEditUser({ ...editUser, address: event.target.value });
        }
    };

    const onUserDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (editUser) {
            setEditUser({ ...editUser, description: event.target.value });
        }
    };

    const onSaveClick = () => {
        if (editUser) {
            onSave(editUser);
        }
    };

    /* ######## RENDERS ######## */
    const renderModalContent = () => {
        if (editUser) {
            return (
                <div className={classes.modal}>
                    <h1>Edit user</h1>
                    <div className={classes.modalBody}>
                        <div className={classes.mapDiv}>map</div>
                        <div className={classes.editFields}>
                            <Input
                                value={editUser.name}
                                onChange={onUserNameChange}
                                label={'Name'}
                                className={classes.inputField}
                            />
                            <Input
                                value={editUser.address}
                                onChange={onUserAddressChange}
                                label={'Address'}
                                className={classes.inputField}
                            />
                            <Input
                                value={editUser.description}
                                onChange={onUserDescriptionChange}
                                label={'Description'}
                                className={classes.inputField}
                            />
                        </div>
                    </div>
                    <div className={classes.modalActions}>
                        <Button
                            onClick={onSaveClick}
                            variant={'primary'}
                            className={classes.saveButton}
                        >
                            Save
                        </Button>
                        <Button onClick={onCancel} variant={'secondary'}>
                            Cancel
                        </Button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className={clsx(classes.backdrop, { [classes.open]: open })}>
            {renderModalContent()}
        </div>
    );
};
