import React from 'react';
import {Grid,Paper,Avatar,TextField,Button,FormControlLabel,Radio,RadioGroup} from '@mui/material';
import { FormControl,FormLabel } from '@mui/material';
// import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const Signup = () => {
    const paperStyle = {padding :50,height:"70vh",width:280,margin:"10px auto"}
    const avatarStyle = {backgroundColor:"green"}
    
    const btnstyle = {margin:"8px 0"}
    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align= "center">
                <Avatar style={avatarStyle}>S</Avatar>
                <h2>Sign Up</h2>
                {/* <Typography varient='caption'>pls fill this form to create an account !</Typography> */}
                </Grid>
                <TextField
                helperText="Please enter your email"
                id="demo-helper-text-aligned"
                label="Email" fullWidth required/>
                <TextField
                helperText="Please enter your password" type="password"
                id="demo-helper-text-aligned"
                label="Password" fullWidth required/>
                <TextField
                helperText="Please enter your confirm password" type="password"
                id="demo-helper-text-aligned"
                label="confirm Password" fullWidth required/>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup style={{display:'initial'}}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio />} label="Male" />
                        <FormControlLabel value="male" control={<Radio />} label="Female" />
                    </RadioGroup>
                </FormControl>
                {/* <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group">
                </RadioGroup>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                
                </FormControl> */}
                {/* <FormControlLabel control={<Checkbox name="checked" color="primary" />}
                label="Male"/> */}
                <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth>SIGN UP</Button> 
                {/* <Typography>
                    <Link href="#">Forgot Password</Link>
                </Typography>
                <Typography>Do you have an account ?
                    <Link href="#">Sign up </Link>
                </Typography>
                     */}
            </Paper>
        </Grid>

    )
    

}
export default Signup