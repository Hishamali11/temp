import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { borderRadius } from '@mui/system';

function temp() {
  return (
    <div >
    <ButtonGroup variant="outlined" aria-label="outlined primary button group" size='large'>
        <Button style={{backgroundColor:'#16aef2'}} variant='contained'>PREDICT</Button>
        <Button style={{color:'white'}}>ANALYTICS VIEW</Button>
        <Button style={{color:'white'}}>ADVANCE SEARCH</Button>
    </ButtonGroup>
</div>
  )
}

export default temp