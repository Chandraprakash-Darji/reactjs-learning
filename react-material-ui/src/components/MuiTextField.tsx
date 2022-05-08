import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import React, { useState } from "react";
const MuiTextField = () => {
  const [passWordVisibility, setPassWordVisibility] = useState<boolean>(false);
  const handlePasswordVisibilityToggle = () => {
    setPassWordVisibility((visiBiltyStatus) => !visiBiltyStatus);
  };

  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction={"row"} gap={3}>
        <TextField label="Name" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction={"row"} gap={3}>
        <TextField label="Small Secondary" color="secondary" size="small" />
      </Stack>
      <Stack direction={"row"} gap={3}>
        <TextField label="Required" required />
        <TextField
          label="Password"
          helperText="Do not Share your password with anyone"
          type={"password"}
          value="ddsd"
          disabled
        />
        <TextField label="ReadOnly" required InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={"row"} gap={3}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack>
        <TextField
          label="Password"
          helperText="Do not Share your password with anyone"
          type={passWordVisibility ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={handlePasswordVisibilityToggle}
              >
                {passWordVisibility ? (
                  <VisibilityRoundedIcon />
                ) : (
                  <VisibilityOffRoundedIcon />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack>
        <TextField
          label="Form Input"
          required
          value={value}
          error={!value}
          onChange={(e) =>
            setValue(e.target.value)
          }
          helperText={!value?"Required":"Dont Share your Password"} 
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
