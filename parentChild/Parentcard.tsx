import {  Grid, Typography,Paper, IconButton, InputAdornment, OutlinedInput, Checkbox, FormControlLabel, Button, Link, Divider, TextField } from '@mui/material'
import React from 'react'
import './styles.css'
import {  SpaceBar, ViewColumn, Visibility, VisibilityOff } from '@mui/icons-material'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Parentcard() {
    const paperstyle={
        padding: '20px 30px',
        width:300,
        margin:"20px auto"
    }
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Grid className='card'  >
    <Paper className='paperstyle' style={paperstyle}>
        <Grid container  direction='column' padding={1}>
        <Typography variant='h5' className='head' sx={{text:'bold'}}>Sign in</Typography>
            <Typography variant='caption'>Please enter your login credentials</Typography>
            <Typography variant='caption'>Email</Typography>
             <OutlinedInput type='text' placeholder='example@gmail.com' sx={{height:30}}></OutlinedInput>
            <Typography variant='caption'>Password</Typography>
            <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            sx={{height:30}}
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
          />
          <Grid className='checkboxlabel'>
          <FormControlLabel  control={<Checkbox />} label="Remember Me" />
          <Link href="#" underline="hover" >forget password?</Link>
          </Grid>
          <Button fullWidth variant="contained">Sign in</Button>
          <Divider>or</Divider>
          <Grid  alignContent={'center'} className='footer'sx={{justifyItems:'center'}} >
          <Button fullWidth variant="outlined" sx={{color:'black'}} startIcon={<GoogleIcon />} className='google'>Sign in with Google</Button>
          <Button fullWidth variant="outlined" sx={{color:'black'}} startIcon={<GitHubIcon />} className='google'>Sign in with Github</Button>
          <Typography className='last'>Don't  have an account? <Link href="#" underline="hover" >sign up</Link></Typography>
          </Grid>
        </Grid>
    </Paper>
    </Grid>
  )
}
