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
            efficiently!<br></br>
            1. Fill in the textboxes.<br></br>
            2. Click on the <b>CREATE CLIPBOARD</b> button.<br></br>
            3. Finally, click on the <b>COPY</b> button to copy the text onto
            your clipboard!
            <Divider></Divider>
            <br></br>
            Once you paste your text on <em>Slack</em> messenger, use this
            following keyboard command to automatically implement the markdown
            formatting built in <em>Slack</em>:<br></br>
            <code>CTRL/CMD + Shift + F</code>
            <Divider></Divider>
            <br></br>
            Texts you've written on this page will not be saved upon refresh or
            exiting.<br></br>
            You can find more guidelines here at the{' '}
            <a
              href='https://github.com/sabrinaira/help-desk-form?tab=readme-ov-file#help-desk-form'
              style={{
                textDecoration: 'none',
                color: '#3f51b5',
                fontSize: '16px',
              }}
            >
              README
            </a>
            !
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
