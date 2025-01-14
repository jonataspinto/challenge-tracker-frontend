import { Open_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#fff",
          boxShadow: "initial",
          borderBottom: "1px solid",
          borderBottomColor: "#b3becd",
          color: "#000",
        },
      },
    },
  },
});

export default theme;
