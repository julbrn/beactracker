import React from 'react';
import { Dialog, Button, DialogActions, DialogContent, TextField } from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from "react-hook-form";

type AddFriendProps = {
    setFriendModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
    setFriendList: React.Dispatch<React.SetStateAction<string[]>>;
    friendList: string[];
    friendModalOpened: boolean;
    setFriend: React.Dispatch<React.SetStateAction<string>>;
};

function AddFriend({ setFriendModalOpened, setFriend, setFriendList, friendList, friendModalOpened }: AddFriendProps) {
    const {
        register, handleSubmit, reset,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    const handleCloseFriendModal = () => {
        setFriendModalOpened(false)
    }
    const handleAddFriend = (data) => {
        setFriend(data.friend);
        setFriendList([...friendList, data.friend]);
        handleCloseFriendModal();
        reset()
    }
    return (
        <Dialog open={friendModalOpened} onClose={handleCloseFriendModal}>
            <form onSubmit={handleSubmit(handleAddFriend)}>
                <DialogTitle>Добавьте человека</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Добавьте человека, который может Вам помочь выполнить это дело.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="friendName"
                        label="Имя человека"
                        type="text"
                        fullWidth
                        variant="standard"
                        error={!!errors.friend}
                        helperText={errors.friend?.message}
                        {...register("friend",
                            {
                                required: "Обязательное поле",
                                minLength: { value: 2, message: "Имя должно содержать не менее 2 символов" }, pattern: { value: /^[A-Za-zА-Яа-я ]{2,20}$/, message: "Имя должно содержать только буквы" }
                            })}
                        name="friend"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFriendModal}>Отмена</Button>
                    <Button type="submit" >Добавить</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddFriend