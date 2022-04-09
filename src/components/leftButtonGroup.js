import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { borderRadius } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function leftButtonGroup() {
  return (
    <div className='buttons'>
    
        <div >
            <ButtonGroup variant="outlined" aria-label="outlined primary button group" size='large'>
                <Button style={{backgroundColor:'#16aef2',width:'200px'}} variant='contained'>PREDICT</Button>
                <Button style={{color:'white',width:'200px'}}>ANALYTICS VIEW</Button>
                <Button style={{color:'white',width:'200px'}}>ADVANCE SEARCH</Button>
            </ButtonGroup>
        </div>

        <div className='textfield'>
            <TextField sx={{borderRadius:'100px'}}id="outlined-search" label="Search Customer Id" type="search" variant="filled" />
        </div>

        <div >
            <ButtonGroup variant="outlined" aria-label="outlined primary button group" >
                <Button style={{color:'white',width:'200px'}} >ADD</Button>
                <Button style={{color:'white',width:'200px'}} variant='text'>EDIT</Button>
                <Button style={{color:'white',width:'200px'}}>DELETE</Button>
            </ButtonGroup>
        </div>
        
    </div>
    
  );
}

export default leftButtonGroup;