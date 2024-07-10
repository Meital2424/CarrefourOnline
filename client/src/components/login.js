import * as React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, enter } from "../features/user/userSlice";
import NavBarEnter from './navBars/navBarEnter';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Login() {

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const currentUser = useSelector(x => x.user.currentUser);

  const submit = async (data) => {
    console.log(data);
    await dispatch(addNewUser(data));
    await dispatch(enter(data.password));
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {!currentUser && <NavBarEnter />}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh'
        }}
      >
        <form onSubmit={handleSubmit(submit)} style={{ textAlign: 'center' }}>
          <h1>login</h1>
          <p>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
          <p>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="tz">id</InputLabel>
              <OutlinedInput
                id="tz"
                {...register("tz", { required: true })}
                label="id"
              />
            </FormControl>
          </p>
          <p>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="telephon">phone</InputLabel>
              <OutlinedInput
                id="telephon"
                {...register("telephon", { required: true })}
                label="phone"
              />
            </FormControl>
          </p>

          <Stack marginLeft="5vw" marginTop="5vh" direction="row" >
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#283593',
                color: 'white',
              }}
            >
              next
            </Button>

          </Stack>
        </form>
      </Box>
    </div>
  );
}