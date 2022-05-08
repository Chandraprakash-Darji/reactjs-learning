import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
const MuiCheackbox = () => {
  const [acceptTNC, setAcceptTNC] = useState(false);
  console.log(acceptTNC);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTNC(event?.target.checked);
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
          label="I Accept terms and condition"
          control={<Checkbox checked={acceptTNC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderRoundedIcon />}
          checkedIcon={<BookmarkRoundedIcon />}
          checked={acceptTNC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTMl"
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Checkbox
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

export default MuiCheackbox;
