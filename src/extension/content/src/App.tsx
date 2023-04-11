import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
  Route,
  MemoryRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomeModule from "./modules/Home/HomeModule";
import SettingsModule from "./modules/Settings/SettingsModule";
import AboutModule from "./modules/About/AboutModule";

function App() {
  return (
    <Box
      id="browser-extension-template-app"
      style={{
        opacity: 0,
        transform: "translateX(120%)",
      }}
      position={"fixed"}
      top={"10px"}
      transition={".2s ease opacity, .2s ease transform"}
      right={"10px"}
      zIndex={999999999}
      bg="gray.900"
      width="500px"
      height="500px"
      borderRadius={"2xl"}
      overflow={"hidden"}
      color={"white"}
      fontFamily={"sans-serif"}
    >
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
              <Route path="index.html" element={<HomeModule />} />
              <Route path="/" element={<HomeModule />} />
              <Route path="settings" element={<SettingsModule />}></Route>
              <Route path="about" element={<AboutModule />}></Route>
              <Route path="*" element={<HomeModule />} />
            </Routes>
          </Box>
          <Navbar></Navbar>
        </Flex>
      </Router>
    </Box>
  );
}
export default App;
