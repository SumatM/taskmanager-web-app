import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const [form, setForm] = useState({});

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(form)
  }


  return (
    <Box textAlign="center">
      <Heading>SignUp Page</Heading>
      <Box
        w="40%"
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
              w="60%"
              type="email"
              placeholder="Enter your Email"
              name="email"
              onChange={handleInput}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" mt="2rem">
            <label>
              <Text>Password:</Text>
            </label>
            <Input
              border="1px solid #A2A7A7 "
              w="60%"
              type="password"
              placeholder="Enter your Password"
              onChange={handleInput}
              name="password"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" mt="2rem">
            <label>
              <Text>Confirm Password:</Text>
            </label>
            <Input
              border="1px solid #A2A7A7 "
              w="60%"
              type="password"
              placeholder="Enter your Password"
              onChange={handleInput}
              name="confirm password"
            />
          </Box>
          <Box mt="2rem">
            <Button type="submit" border="1px solid #A2A7A7 ">SignUp</Button>
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
