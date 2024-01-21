import { Box } from "@mui/material";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          height: "100vh",
          textAlign: "center",
          p: "3vw",
        }}
      >
        <Header />
        <Outlet />
      </Box>
    </Provider>
  );
}

export default App;
