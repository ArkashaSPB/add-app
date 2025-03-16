import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Box, CssBaseline, GlobalStyles, ThemeProvider} from "@mui/material";
import theme from "./style/theme.js";
import {all} from "./style/all.js";
import AddApp from "./pages/user/addApp.jsx";
import { userStore } from "./store/userStore.js";
import {useEffect} from "react";
import User from "./pages/user/User.jsx";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/shop", element: <div>8</div> },
  { path: "/add-app", element: <AddApp/> },
  { path: "/user", element: <User/> },
];

function App() {

  const { checkAuth } = userStore();
  useEffect(() => {
    if(localStorage.getItem("token")){
      checkAuth();
    }
  },[])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={all}
        />
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))}
            <Route path="*" element={<Box sx={{color:'white'}}>Другая страница</Box>} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>

    </>
  );
}


export default App;
