import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mykaeull</Text>
          <Text color="gray.300" fontSize="small">
            mykaeull99@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Mykaeull Gomes"
        src="https://avatars.githubusercontent.com/u/44247587?s=400&u=ce450c4dfc756184b6e66448506833df78591b90&v=4"
      />
    </Flex>
  );
}
