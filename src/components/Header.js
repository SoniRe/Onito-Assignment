import { useSelector } from "react-redux";
import companyLogo from "./../assets/onito-logo.png";
import { Box, Typography } from "@mui/material";

const Header = () => {
  const isForm1Filled = useSelector((store) => store.users.isForm1Filled);

  return (
    <>
      <Box
        sx={{ width: "20vw" }}
        component="img"
        src={companyLogo}
        alt="company logo"
      />
      <Typography sx={{ textDecoration: "underline", mt: "4vw" }} variant="h5">
        {isForm1Filled === false ? "Personal Details" : "Address Details"}
      </Typography>
    </>
  );
};

export default Header;
