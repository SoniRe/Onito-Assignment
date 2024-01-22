import { useSelector } from "react-redux";
import companyLogo from "./../assets/onito-logo.png";
import { Box, Typography } from "@mui/material";

const Header = () => {
  const form1 = useSelector((store) => store.users.form1);

  return (
    <>
      <Box
        sx={{ width: "20vw" }}
        component="img"
        src={companyLogo}
        alt="company logo"
      />
      <Typography sx={{ textDecoration: "underline", mt: "4vw" }} variant="h5">
        {Object.keys(form1).length === 0
          ? "Personal Details"
          : "Address Details"}
      </Typography>
    </>
  );
};

export default Header;
