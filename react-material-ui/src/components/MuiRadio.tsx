import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

const MuiRadio = () => {
    const [value, setValue] = useState('')
    console.log(value)
    const handleChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          id="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size="small" color="secondary"/>} label="0-2" value={"0-2"} />
          <FormControlLabel control={<Radio size="small" color="success"/>} label="3-5" value={"3-5"} />
          <FormControlLabel control={<Radio size="small" color="error"/>} label="6-8" value={"6-8"} />
        </RadioGroup>
        <FormHelperText>
            Invalid Input
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
