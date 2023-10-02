import { Box, Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { signupUser } from "../utils/signupUser";
import ShowToast from "../componant/Toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toast = useToast();
  const navigate = useNavigate();

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let data = await signupUser(form);
    if (!data?.response?.data) {
      ShowToast(toast, "", data.message, "success");
      setForm({ email: "", password: "", confirmPassword: "" });
      navigate("/");
    } else {
      ShowToast(toast, "", data.response.data.message, "error");
    }
  }

  function handleCallbackResponse(response) {
    console.log(response);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "larger",
    });
  }, []);

  return (
    <Box textAlign="center" pb="2rem">
      <Box
        w="40%"
        margin="auto"
        padding="2rem"
        mt="0.5rem"
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
              value={form.email}
              required
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
              required
              value={form.password}
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
              name="confirmPassword"
              required
              value={form.confirmPassword}
            />
          </Box>
          <Box mt="2rem">
            <Button type="submit" border="1px solid #A2A7A7 ">
              SignUp
            </Button>
          </Box>
        </form>
        <Box m="1rem 0">
          <Text fontWeight="bold">Or</Text>
        </Box>
        <Box>
          <Button id="signInDiv"></Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
