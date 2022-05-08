import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";



const skills = ["Html", "CSS", "Javascript", "TypeScript", "React"];



const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  console.log({ value });
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(parmas) => <TextField {...parmas} label="Skills" />}
        value={value}
        onChange={(_event: any, newVal: string | null) => setValue(newVal)}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutocomplete;
