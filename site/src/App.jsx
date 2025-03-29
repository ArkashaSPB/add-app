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
import Layout from "./pages/user/Layout.jsx";
import AppPage from "./pages/AppPage.jsx";
import EditPage from "./pages/user/EditPage.jsx";

import "react-toastify/dist/ReactToastify.css";
import Public from "./pages/Public.jsx";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/public/:id", element: <Public/>},
  { path: "/add-app", element: <Layout><AddApp/></Layout> },
  { path: "/user", element: <Layout><User/></Layout>},
  { path: "/app/:id", element: <Layout><AppPage/></Layout>},
  { path: "/edit-app/:id", element: <Layout><EditPage/></Layout>},
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
            <Route path="*" element={<Box sx={{color:'white'}}>Страница не найдена</Box>} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // можно еще "dark" или "light"
      />

    </>
  );
}


export default App;
