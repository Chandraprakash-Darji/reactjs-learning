import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation Speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditRoundedIcon />} />}
    >
      <SpeedDialAction
        icon={<ContentCopyRoundedIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      />
      <SpeedDialAction
        icon={<LocalPrintshopRoundedIcon />}
        tooltipTitle="Print"
        tooltipOpen
      />
      <SpeedDialAction
        icon={<ShareRoundedIcon />}
        tooltipTitle="Share"
        tooltipOpen
      />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
