import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Box>
      {/*Navbar*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={} />
      </Routes>
    </Box>
  );
};

export default App;
