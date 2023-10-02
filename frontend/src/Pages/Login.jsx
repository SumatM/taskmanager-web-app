import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import { loginUser } from "../utils/loginUser";
import ShowToast from "../componant/Toast";
import { useDispatch } from "react-redux";
import { setAuth, setToken } from "../redux/appReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await loginUser({ email, password });
    if (data?.token) {
      ShowToast(toast, "Login", data?.message, "success");
      dispatch(setAuth());
      dispatch(setToken(data.token));
      navigate("/dashboard");
    } else {
      ShowToast(toast, "Login", data?.response.data.message, "error");
    }
  };

  console.log(email);



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
    </Box>
  );
};

export default Login;
