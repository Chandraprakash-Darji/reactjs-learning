import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalicRounded";
import FormatUnderlinedRoundedIcon from "@mui/icons-material/FormatUnderlinedRounded";
import React, { useState } from "react";

const MuiButtons = () => {
  const [format, setFormat] = useState<string[]>([]);
  const [formatEx, setFormatEx] = useState<string | null>(null);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string[]
  ) => {
    console.log(updatedFormat);
    setFormat(updatedFormat);
  };
  const handleFormatExChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    console.log(updatedFormat);
    setFormatEx(updatedFormat);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          href="https://github.com/Chandraprakash-Darji"
          target={"_blank"}
        >
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2}>
        <Typography>Primary</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="primary">
            Outline
          </Button>
          <Button variant="contained" color="primary">
            contained
          </Button>
          <Button variant="text" color="primary">
            text
          </Button>
        </Stack>
        <Typography>secondary</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="secondary">
            Outline
          </Button>
          <Button variant="contained" color="secondary">
            contained
          </Button>
          <Button variant="text" color="secondary">
            text
          </Button>
        </Stack>
        <Typography>Error</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="error">
            Outline
          </Button>
          <Button variant="contained" color="error">
            contained
          </Button>
          <Button variant="text" color="error">
            text
          </Button>
        </Stack>
        <Typography>warning</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="warning">
            Outline
          </Button>
          <Button variant="contained" color="warning">
            contained
          </Button>
          <Button variant="text" color="warning">
            text
          </Button>
        </Stack>
        <Typography>info</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="info">
            Outline
          </Button>
          <Button variant="contained" color="info">
            contained
          </Button>
          <Button variant="text" color="info">
            text
          </Button>
        </Stack>
        <Typography>success</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="success">
            Outline
          </Button>
          <Button variant="contained" color="success">
            contained
          </Button>
          <Button variant="text" color="success">
            text
          </Button>
        </Stack>
        <Typography>Size</Typography>
        <Stack display={"block"} spacing={2} direction="row">
          <Button variant="contained" color="success" size="small">
            small
          </Button>
          <Button variant="contained" color="success" size="medium">
            medium
          </Button>
          <Button variant="contained" color="success" size="large">
            large
          </Button>
        </Stack>
        <Typography>Icons</Typography>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Clicked")}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <IconButton aria-label="send" color="success" size="large">
            <SendIcon />
          </IconButton>
        </Stack>
        <Typography>Group Button</Typography>
        <Stack gap={4}>
          <ButtonGroup aria-label="alignment btn outlind" variant="outlined">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup
            aria-label="alignment btn vertical"
            variant="contained"
            orientation="vertical"
            size="large"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup
            aria-label="alignment btn secondary color"
            variant="outlined"
            color="secondary"
            size="small"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="text Formating"
            value={format}
            onChange={handleFormatChange}
            size="small"
            color="success"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldRoundedIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicRoundedIcon />
            </ToggleButton>
            <ToggleButton value="undeline" aria-label="underline">
              <FormatUnderlinedRoundedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="text Formating"
            value={format}
            onChange={handleFormatChange}
            size="small"
            color="success"
            orientation="vertical"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldRoundedIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicRoundedIcon />
            </ToggleButton>
            <ToggleButton value="undeline" aria-label="underline">
              <FormatUnderlinedRoundedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="text Formating"
            value={formatEx}
            onChange={handleFormatExChange}
            size="small"
            color="success"
            exclusive
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldRoundedIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicRoundedIcon />
            </ToggleButton>
            <ToggleButton value="undeline" aria-label="underline">
              <FormatUnderlinedRoundedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiButtons;
