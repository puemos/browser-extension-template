import { Stack, Box } from "@chakra-ui/react";
import { Home, Info, Settings } from "lucide-react";
import React from "react";
import { NavLink } from "./NavLink";
import { useLocation } from "react-router-dom";

export function Navbar() {
  const { pathname } = useLocation();
  return (
    <Stack
      isInline
      borderTopWidth={"thin"}
      borderTopColor="gray.800"
      py="0.5rem"
      px="6rem"
      w={"100%"}
      justifyContent="space-between"
    >
      <Box>
        <NavLink
          path="/options.html"
          active={pathname === "/options.html"}
          label="Home"
          icon={<Home />}
        ></NavLink>
      </Box>
      <Box>
        <NavLink
          path="/about"
          active={pathname === "/about"}
          label="About"
          icon={<Info />}
        ></NavLink>
      </Box>
      <Box>
        <NavLink
          path="/settings"
          active={pathname === "/settings"}
          label="Settings"
          icon={<Settings />}
        ></NavLink>
      </Box>
    </Stack>
  );
}
