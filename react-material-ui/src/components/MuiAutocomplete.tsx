import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["Html", "CSS", "Javascript", "TypeScript", "React"];

const skillsOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);

  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ skill });
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(parmas) => <TextField {...parmas} label="Skills" />}
        value={value}
        onChange={(_event: any, newVal: string | null) => setValue(newVal)}
        freeSolo
      />
      <Autocomplete
        options={skillsOption}
        renderInput={(parmas) => <TextField {...parmas} label="Skills" />}
        value={skill}
        onChange={(_event: any, newVal: Skill | null) => setSkill(newVal)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
