import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import ptBR from "@/_mock/lang/pt-BR";

export function ShipmentCaptureCta() {
  const { palette } = useTheme();
  const {
    aside: { title, subTitle, buttonLabel },
  } = ptBR.trackerPage;

  return (
    <Box
      component="aside"
      sx={{
        backgroundImage: {
          xs: `linear-gradient(${palette.primary.main}, ${palette.primary.light})`,
          lg: "none",
        },
        padding: {
          xs: 4,
          sm: 12,
          lg: 4,
        },
        paddingLeft: {
          xs: 3,
        },
        paddingRight: {
          xs: 3,
        },
      }}
      color="white"
    >
      <Typography variant="h5" component="h1" fontWeight={700}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{subTitle}</Typography>
      <Button
        variant="contained"
        color="inherit"
        sx={{
          marginTop: 3,
          paddingTop: 1.75,
          paddingBottom: 1.75,
          minWidth: { xs: "100%" },
          color: {
            xs: palette.primary.main,
          },
          backgroundColor: {
            xs: palette.background.paper,
          },
        }}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}
