import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/appReducer";

const NavBar = () => {
  const isAuth = useSelector((s) => s.appStoreReducer)?.isAuth;
  const navigate = useNavigate()
  const dispatch  = useDispatch()

  function logout(){
    localStorage.setItem(
      "appData",
      JSON.stringify({ token: "",isAuth:false })
    );
    dispatch(setLogout())
    navigate('/')
  }


  return (
    <Box>
      <Flex p="4" alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="2rem">LOGO</Text>
        </Box>
        <Box
          w="40%"
          display="flex"
          justifyContent="space-between"
          fontWeight="bold"
        >
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : {};
            }}
            to="/"
          >
            Login
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : {};
            }}
            to="/signup"
          >
            SignUp
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : {};
            }}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          {isAuth ? <NavLink onClick={logout}>Logout</NavLink> : ""}
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
