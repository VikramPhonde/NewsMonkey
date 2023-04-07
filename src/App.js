import NavBar from "./components/NavBar";
import React from 'react'
import News from "./components/News";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  const pageSize=5;
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={< News pazeSize={pageSize} key="general" category="general" />}></Route>
          <Route exact path='/business' element={< News pazeSize={pageSize} key="business" category="business" />}></Route>
          <Route exact path='/entertainment' element={< News pazeSize={pageSize} key="entertainment" category="entertainment" />}></Route>
          <Route exact path='/health' element={< News pazeSize={pageSize} key="health" category="health" />}></Route>
          <Route exact path='/science' element={< News pazeSize={pageSize} key="science" category="science" />}></Route>
          <Route exact path='/sports' element={< News pazeSize={pageSize} key="sports" category="sports" />}></Route>
          <Route exact path='/technology' element={< News pazeSize={pageSize} key="technology" category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
