import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">Heading h1</Typography>
        <Typography variant="h2">Heading h2</Typography>
        <Typography variant="h3">Heading h3</Typography>
        {/* Styles of h4 for p tage */}
        <Typography variant="h4" component="p" gutterBottom>Heading h4</Typography>
        <Typography variant="h5">Heading h5</Typography>

        <Typography variant="subtitle1">Heading subtitle1</Typography>
        <Typography variant="subtitle2">Heading subtitle2</Typography>

        <Typography variant="body2">Heading body2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut optio unde nulla! Libero minus nihil, architecto accusantium quas aliquam laboriosam suscipit a voluptatem corrupti. Tenetur, ipsam nesciunt. Asperiores, reprehenderit ut!</Typography>

        <Typography variant="body2">Heading body2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut optio unde nulla! Libero minus nihil, architecto accusantium quas aliquam laboriosam suscipit a voluptatem corrupti. Tenetur, ipsam nesciunt. Asperiores, reprehenderit ut!</Typography>

    </div>
  )
}

export default MuiTypography