import { Box, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  console.log({ checked });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) setSkills([...skills, event.target.value]);
    else setSkills(skills.filter((skill) => skill !== event.target.value));
  };

  return (
    <Box>
        <Box>

      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={checked} onChange={handleChange} />}
        />
        </Box>
        <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTMl"
              control={
                <Switch
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Switch
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Switch
                  value="Javascript"
                  checked={skills.includes("Javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
        </Box>
        
    </Box>
  );
};

export default MuiSwitch;
