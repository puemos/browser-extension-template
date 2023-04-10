import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import SettingsView from "./views/SettingsView";
import AboutView from "./views/AboutView";
import HomeView from "./views/HomeView";

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
              <Route path="index.html" element={<HomeView />} />
              <Route path="/" element={<HomeView />} />
              <Route path="settings" element={<SettingsView />}></Route>
              <Route path="about" element={<AboutView />}></Route>
            </Routes>
          </Box>
          <Navbar></Navbar>
        </Flex>
      </Router>
    </Box>
  );
}
export default App;
