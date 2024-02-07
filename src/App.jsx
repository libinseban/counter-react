import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  
  const decrementCount = () => {
    if(count>0){
  setCount(count-1)
    }
  };

  return (
    <Container
      sx={{
        bgcolor: '#cfe8fc',
        height: '70vh',
        width: '50vw',
        margin: '10vh auto',
        paddingTop: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        className="counterBox"
        sx={{
          bgcolor: 'white',
          height: '25vh',
          width: '40vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '10px 5px 5px #aaaaaa',
        }}
      >
        <Typography variant="h1" component="h2" sx={{ fontSize: '4rem' }}>
          {count}
        </Typography>
      </Box>

      <Stack direction="row" spacing={2} sx={{ paddingBottom: '10vh' }}>
      {count > 0 ? (
  <Button variant="contained" color="primary" onClick={decrementCount}>
    Decrement -
  </Button>
) : (
  
  <Typography variant="body1" color="error" onClick={() => alert("You Have Reached 0")}>
    You have reached 0
  </Typography>
)}


        <Button variant="contained" color="secondary" onClick={incrementCount}>
          Increment +
        </Button>
      </Stack>
    </Container>
  );
}
