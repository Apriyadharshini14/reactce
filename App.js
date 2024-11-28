import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

function LoginDialog() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = () => {
    // Placeholder login logic
    if (username && password) {
      alert('Login successful!');
      setOpen(false);
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div>
      <Button variant="contained" data-testid="login" onClick={handleClickOpen}>
        Login
      </Button>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            data-testid="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            data-testid="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleLogin} data-testid="dia-login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDialog;
