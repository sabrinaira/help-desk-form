import 'react';
import { Card, CardContent, Divider, Typography, Box } from '@mui/material';
import HelpDeskForm from './HelpDesk';

function App() {
  return (
    <Box sx={{ padding: '20px', maxWidth: 600, margin: 'auto' }}>
      <Typography variant='h4' align='center' gutterBottom>
        Help Desk Ticket
      </Typography>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='body1'>
            I made this simple template to write up a help desk ticket more
            efficiently!<Divider></Divider>
            Once you paste your text on Slack, use this following keyboard
            command to automatically implement the formatting built on Slack:
            <pre>
              <code>CTRL/CMD + Shift + F</code>
            </pre>
          </Typography>
        </CardContent>
      </Card>
      <br></br>
      <HelpDeskForm />
      <Typography align='center'>
        <a
          href='https://github.com/sabrinaira/help-desk-form'
          style={{
            textDecoration: 'none',
            color: '#3f51b5',
            padding: '10px',
            fontSize: '16px',
          }}
        >
          Click here to go back to Github Repository
        </a>
      </Typography>
    </Box>
  );
}

export default App;
