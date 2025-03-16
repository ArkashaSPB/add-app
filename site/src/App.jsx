import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CssBaseline, GlobalStyles, ThemeProvider} from "@mui/material";
import theme from "./style/theme.js";
import {all} from "./style/all.js";
import AddApp from "./pages/user/addApp.jsx";
import { userStore } from "./store/userStore.js";

// import "./index.css"

const routes = [
  { path: "/", element: <Main /> },
  { path: "/shop", element: <div>8</div> },
  { path: "/add-app", element: <AddApp/> },
];

function App() {


  const { checkAuth, loading } = userStore();

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
            <Route path="*" element={<p>Другая страница</p>} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>

    </>
  );
}


export default App;
