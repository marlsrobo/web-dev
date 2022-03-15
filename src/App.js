import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/HelloWorld";
import Tuiter from "./components/Tuiter";
import Labs from "./components/Labs";
import HomeScreen from "./components/Tuiter/HomeScreen";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="container">
        <Routes>
            <Route path="/">
                <Route path="labs" element={<Labs/>}/>
                <Route path="hello" element={<HelloWorld/>}/>
                <Route path="tuiter" element={<Tuiter/>}>
                    <Route index element={<HomeScreen/>}/>
                </Route>
            </Route>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
