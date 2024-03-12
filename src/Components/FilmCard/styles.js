import styled from "@emotion/styled";
import { CardContent, Rating } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const Content = styled(CardContent)(() => ({
  padding: "10px",
  background: "rgba(0,0,0,0)",
  position: "absolute",
  height: "100%",
  width: "100%",
  transition: "0.4s",
  color: "#fff",
  zIndex: 2,
  opacity: 0,
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    background: "rgba(0,0,0,0.5)",
    opacity: 1,
    cursor: "pointer",
  },
}));

export const MyRating = styled(Rating)(({ theme }) => ({
  ".MuiRating-iconEmpty": {
    color: yellow[700],
  },
}));
