import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export function NavLink(props: {
  path: string;
  label: string;
  active: boolean;
  icon: ReactElement;
}) {
  const navigate = useNavigate();

  return (
    <Stack
      borderRadius="md"
      textColor={props.active ? "green.200" : "gray.300"}
    >
      <Box w="100%">
        <Link
          _hover={{
            textDecoration: "none",
          }}
          onClick={() => navigate(props.path)}
        >
          <Stack alignItems={"center"} spacing={1}>
            {React.cloneElement(props.icon, {
              size: 24,
            })}
            <Text size="sm" fontWeight={"semibold"}>
              {props.label}
            </Text>
          </Stack>
        </Link>
      </Box>
    </Stack>
  );
}
