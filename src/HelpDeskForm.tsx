import React, { useState } from "react";

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
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h2>Plain Text Copy App</h2>
            <textarea
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text here..."
                style={{ width: "100%", marginBottom: "10px" }}
            />
            <button onClick={handleAdd}>Add</button>

            <div>
                {texts.map((text, index) => (
                    <div key={index} style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                        <pre style={{ backgroundColor: "#f4f4f4", padding: "5px", whiteSpace: "pre-wrap" }}>{text}</pre>
                        <button onClick={() => handleCopy(text)}>Copy</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HelpDeskForm;