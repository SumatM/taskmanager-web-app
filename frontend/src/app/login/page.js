import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

const page = () => {
  return (
    <Box textAlign="center">
      <Heading>Login Page</Heading>
      <Box
        w="40%"
        margin="auto"
        padding="3rem"
        mt="2rem"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        border="1px solid #A2A7A7 "
      >
        <form>
          <Box display="flex" justifyContent="space-between">
            <label>
              <Text>Email:</Text>
            </label>
            <Input
              border="1px solid #A2A7A7 "
              w="70%"
              type="email"
              placeholder="Enter your Email"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" mt="2rem">
            <label>
              <Text>Password:</Text>
            </label>
            <Input
              border="1px solid #A2A7A7 "
              w="70%"
              type="password"
              placeholder="Enter your Password"
            />
          </Box>
          <Box mt="2rem">
            <Button border="1px solid #A2A7A7 ">Login</Button>
          </Box>
        </form>
      </Box>
      <Box m="1rem 0">
        <Text fontWeight="bold">Or</Text>
      </Box>
      <Box>Login with Google</Box>
    </Box>
  );
};

export default page;
