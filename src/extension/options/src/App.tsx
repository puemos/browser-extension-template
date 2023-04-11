import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomeModule from "./modules/Home/HomeModule";
import SettingsModule from "./modules/Settings/SettingsModule";
import AboutModule from "./modules/About/AboutModule";

function App() {
  return (
    <Box bg="gray.900" width="500px" height="500px">
      <Router>
        <Flex direction="column" height={"100%"}>
          <Box
            overflowY="scroll"
            className="Main"
            flex="1"
            css={{
              "&::-webkit-scrollbar": {
                width: "1rem",
              },
              "&": {
                "scrollbar-width": "thin",
                "scrollbar-color": "#303038 var(--chakra-colors-gray-900)",
              },
              "&::-webkit-scrollbar-track": {
                background: "var(--chakra-colors-gray-900)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#303038",
                borderRadius: "1rem",
                border: "5px solid var(--chakra-colors-gray-900)",
              },
            }}
          >
            <Routes>
              <Route path="options.html" element={<HomeModule />} />
              <Route path="/" element={<HomeModule />} />
              <Route path="settings" element={<SettingsModule />}></Route>
              <Route path="about" element={<AboutModule />}></Route>
            </Routes>
          </Box>
          <Navbar></Navbar>
        </Flex>
      </Router>
    </Box>
  );
}
export default App;
