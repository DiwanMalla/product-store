import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Box>
      {/*Navbar*/}
      <Routes>
        <Route path="/" />
      </Routes>
    </Box>
  );
};

export default App;
