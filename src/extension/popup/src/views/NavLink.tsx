import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function NavLink(props: { path: string; label: string }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Stack
      spacing="2px"
      py="1"
      px="2"
      borderRadius="md"
      bgColor={pathname === props.path ? "gray.600" : "transparent"}
    >
      <Box w="100%">
        <Link
          _hover={{
            textDecoration: "none",
          }}
          onClick={() => navigate(props.path)}
        >
          <Heading size="sm">{props.label}</Heading>
        </Link>
      </Box>
    </Stack>
  );
}
