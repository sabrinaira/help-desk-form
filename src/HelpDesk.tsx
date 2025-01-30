import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';

const HelpDeskForm: React.FC = () => {
  // State for storing individual text box inputs
  const [inputs, setInputs] = useState<string[]>(['', '', '', '', '']); // creates 5 empty fields
  const [texts, setTexts] = useState<string[]>([]);

  // Handle text box value change
  const handleInputChange = (index: number, value: string): void => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  // Handle Add button to combine all text boxes and add to the list
  const handleAdd = (): void => {
    const combinedText = inputs
      .map((input, index) => `${placeholders[index]} ${input}`) // Include placeholder before input
      .join('\n'); // Combine text boxes into one string
    if (combinedText.trim()) {
      setTexts([...texts, combinedText]); // Add combined text to the texts array
    }
    setInputs(['', '', '', '', '']); // Reset text boxes after adding
  };

  // Handle copying combined text to clipboard
  const handleCopy = (text: string): void => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };

  // Array of placeholders for each input box
  const placeholders = [
    '*What is the Problem:*',
    '*What did I expect to happen:*',
    '*What have I already tried:*',
    "*Why I suspect it's not working:*",
    '*Zoom Link:*',
  ];

  return (
    <Box>
      {inputs.map((input, index) => (
        <TextField
          key={index}
          label={placeholders[index]}
          variant='outlined'
          fullWidth
          multiline
          rows={4}
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
      ))}

      <Button
        variant='contained'
        color='primary'
        onClick={handleAdd}
        sx={{ width: '100%', marginBottom: '20px' }}
      >
        Create Clipboard
      </Button>

      <Box>
        {texts.map((text, index) => (
          <Paper
            key={index}
            sx={{
              padding: '10px',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='body1'
              sx={{ flexGrow: 1, whiteSpace: 'pre-wrap' }}
            >
              {text}
            </Typography>
            <Button
              variant='outlined'
              onClick={() => handleCopy(text)}
              sx={{ marginLeft: '10px' }}
            >
              Copy
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default HelpDeskForm;
