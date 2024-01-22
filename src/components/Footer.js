import "datatables.net";
import { Box } from "@mui/material";
import useTables from "../hooks/useTables";

const Footer = () => {
  useTables();

  return (
    <Box
      sx={{ m: "4vw", p: "2vw", backgroundColor: "#D3D3D3", textAlign: "left" }}
    >
      <table id="my-table" bgcolor="#FFFFFF">
        <thead>
          <tr bgcolor="#55AF25">
            <th>Name</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Pincode</th>
          </tr>
        </thead>
      </table>
    </Box>
  );
};

export default Footer;
