import React, { useState } from "react";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box textAlign="center">
      <Heading>Login Login</Heading>
      <Box
        w={{ base: "90%", sm: "70%", md: "50%", lg: "40%" }}
        margin="auto"
        padding="3rem"
        mt="2rem"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        border="1px solid #A2A7A7 "
      >
        <form onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="space-between">
            <label>
              <Text>Email:</Text>
            </label>
            <Input
              border="1px solid #A2A7A7 "
              w="70%"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
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
              value={password}
              onChange={handlePasswordChange}
            />
          </Box>
          <Box mt="2rem">
            <Button type="submit" border="1px solid #A2A7A7">
              Login
            </Button>
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

export default Login;
