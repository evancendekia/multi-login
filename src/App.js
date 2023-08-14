import React, { useState } from "react";
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {Routes, Route} from "react-router-dom"

import Topbar from './scenes/global/Topbar'
import Dashboard from './scenes/dashboard'
import Alpha from './page/alpha/Alpha'
import Beta from './page/beta/Beta'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/alpha" element={<Alpha />} />
              <Route path="/beta" element={<Beta />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
