import React from 'react';
import {Grid,Paper,Avatar,TextField,FormControlLabel,Checkbox,Button} from '@mui/material';
import { Typography,Link } from '@mui/material';
// import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const Login = () => {
    const paperStyle = {padding :20,height:"70vh",width:280,margin:"20px auto"}
    const avatarStyle = {backgroundColor:"blue"}
    const btnstyle = {margin:"8px 0"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align= "center">
                <Avatar style={avatarStyle}>S</Avatar>
                <h2>Sign In</h2>
                </Grid>
                <TextField
                helperText="Please enter your email"
                id="demo-helper-text-aligned"
                label="Email" fullWidth required/>
                <TextField
                helperText="Please enter your password" type="password"
                id="demo-helper-text-aligned"
                label="Password" fullWidth required/>
                <FormControlLabel control={<Checkbox name="checked" color="primary" />}
                label="Remember me"/>
                <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth>SIGN IN</Button> 
                <Typography>
                    <Link href="#">Forgot Password</Link>
                </Typography>
                <Typography>Don't have an account ?
                    <Link href="#">Sign up </Link>
                </Typography>
                    
            </Paper>
        </Grid>

    )
    // const Paperstyle = (padding:20,height:"70vh",width:280,margin:"20px auto");

}
export default Login