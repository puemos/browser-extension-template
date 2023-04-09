import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./views/NavbarView";
import SettingsView from "./views/SettingsView";
import AboutView from "./views/AboutView";

function App() {
  return (
    <Box bg="gray.900" width="500px" height="500px">
      <Router>
        <Flex direction="column">
          <Navbar></Navbar>
          <Box
            overflowY="scroll"
            className="Main"
            height={500 - 72}
            pt="1rem"
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
              <Route path="index.html" element={<Navigate to="/about" />} />
              <Route path="settings" element={<SettingsView />}></Route>
              <Route path="about" element={<AboutView />}></Route>
            </Routes>
          </Box>
        </Flex>
      </Router>
    </Box>
  );
}
export default App;
