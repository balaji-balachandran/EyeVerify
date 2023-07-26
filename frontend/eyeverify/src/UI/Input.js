import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';

const Input = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
    };

    const inputStyle = {
        marginBottom: '20px',
    };

    const buttonStyle = {
        marginTop: '20px',
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                        EyeVerify
                    </Typography>
                </Toolbar>
            </AppBar>

            <div style={containerStyle}>
                <TextField
                    style={inputStyle}
                    id="standard-basic"
                    label="UserName"
                    variant="standard"
                />
                <TextField
                    style={inputStyle}
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                />
                <Button
                    style={buttonStyle}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default Input;

