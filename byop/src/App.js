import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './Main.css';
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import OrderHistory from "./components/OrderHistory";
import HelpDesk from "./components/HelpDesk"
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
     <Router>
       <Navbar/>
       <Route path="/offers" exact component={Offers} />
       <Route path="/" exact component={Home} />
       <Route path="/order-history" exact component={OrderHistory} />
       <Route path="/help-desk" exact component={HelpDesk} />
     </Router>
    </div>
  );
}

export default App;
