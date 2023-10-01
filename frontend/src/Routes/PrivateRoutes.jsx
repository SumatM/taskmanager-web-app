import { Children, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = useSelector((s) => s.appStoreReducer)?.isAuth;

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return isAuth ? <>{children}</> : null;
};

export default PrivateRoutes;
