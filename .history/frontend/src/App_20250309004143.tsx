import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        {/*Navbar*/}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
