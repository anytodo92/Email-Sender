import styled from "styled-components";
import routes from "./routes";
import SideBar from "./layouts/SideBar";
import TopBar from "./layouts/TopBar";

import { Box, Toolbar } from "@mui/material"

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const AppWrapper = styled.div`
  display: flex;
`
const MainWrapper = styled(Box)`
`
function App() {

  const getRoutes = (allRoutes) => 
    allRoutes.map(route => 
      <Route exact path={route.route} element={route.component} key={route.key} />)

  return (
    <AppWrapper>
      <TopBar />
      <SideBar />
      <MainWrapper
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 200px)` } }}
      >
        <Toolbar />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/foundation" />} />
        </Routes>
      </MainWrapper>
      
    </AppWrapper>
  );
}

export default App;
