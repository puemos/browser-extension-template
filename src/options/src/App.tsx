import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomeModule from "./modules/Home/HomeModule";
import SettingsModule from "./modules/Settings/SettingsModule";
import AboutModule from "./modules/About/AboutModule";

function App() {
  return (
    <Box bg="gray.900" width="100%" height="100vh">
      <Router>
        <Flex direction="column" height={"100%"}>
          <Navbar></Navbar>

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
        </Flex>
      </Router>
    </Box>
  );
}
export default App;
