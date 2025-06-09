import * as React from 'react';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { enter, setIsAdmin } from "../features/user/userSlice";
import EnterHeaderNavBar from "./navBars/navBarEnter"

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function Enter() {

    const { register, handleSubmit } = useForm()
    const dis = useDispatch()
    const user = useSelector(x => x.user.currentUser)

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const submit = async (data) => {

        let { name } = data;
        let { password } = data;
        if (name == 1 && password == 1) {
            dis(setIsAdmin("admin"))
        }

        else {
            await dis(enter(password))
        }

    }


    return (
        <div>
            <EnterHeaderNavBar />

            <form onSubmit={handleSubmit(submit)} style={{ textAlign: 'center' }}>
                <p>
                    <h1>Welcome to our site!</h1>
                    <h3>
                        We are happy to provide you with the best service.
                    </h3>
                    <h3>
                        Please enter a your name and password to enter the site.
                    </h3>
                    <h5>* manager: name: 1, password: 1</h5>
                </p>
                <p>
                    <FormControl sx={{ m: 2, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="name">name</InputLabel>
                        <OutlinedInput
                            id="name"
                            {...register("name", { required: true })}
                            label="name"
                        />
                    </FormControl>
                </p>
                <p>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="password">password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            {...register("password", { required: true })}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="password"
                        />
                    </FormControl>
                </p>
                <Stack marginLeft="47vw" marginTop="5vh" direction="row" >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: '#283593',
                            color: 'white',
                        }}
                        endIcon={<SendIcon />}
                    >
                        enter
                    </Button>
                </Stack>
            </form>
        </div>

    )
}