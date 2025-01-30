import React, { useState } from "react";
import { Button, TextField, Typography, Box, Paper } from "@mui/material";

const HelpDeskForm: React.FC = () => {
    const [texts, setTexts] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    const handleAdd = (): void => {
        if (input.trim()) {
            setTexts([...texts, input]);
            setInput("");
        }
    };

    const handleCopy = (text: string): void => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy:", err);
        });
    };

    return (
        <Box sx={{ padding: "20px", maxWidth: 600, margin: "auto" }}>
            <Typography variant="h4" gutterBottom>
                Plain Text Copy App
            </Typography>

            <TextField
                label="Enter Text"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                sx={{ marginBottom: "20px" }}
            />

            <Button variant="contained" color="primary" onClick={handleAdd} sx={{ width: "100%", marginBottom: "20px" }}>
                Add
            </Button>

            <Box>
                {texts.map((text, index) => (
                    <Paper key={index} sx={{ padding: "10px", marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <Typography variant="body1" sx={{ flexGrow: 1, whiteSpace: "pre-wrap" }}>
                            {text}
                        </Typography>
                        <Button variant="outlined" onClick={() => handleCopy(text)} sx={{ marginLeft: "10px" }}>
                            Copy
                        </Button>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default HelpDeskForm;