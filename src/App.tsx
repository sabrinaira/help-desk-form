import 'react';
import { Card, CardContent, Divider, Typography, Box } from '@mui/material';
import HelpDeskForm from './HelpDesk';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Box sx={{ padding: '20px', maxWidth: 600, margin: 'auto' }}>
      <Typography variant='h4' fontFamily='roboto' gutterBottom>
        Help Desk Ticket
      </Typography>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='body1' fontFamily='roboto'>
            I made this simple template to write up a help desk ticket more
            efficiently!<Divider></Divider>
            Once you paste your text on Slack, use this following keyboard command to
            automatically implement the formatting built on Slack:
            <pre>
              <code>CTRL/CMD + Shift + F</code>
            </pre>
          </Typography>
        </CardContent>
      </Card>
      <br></br>
      <HelpDeskForm />
    </Box>
  );
}

export default App;
