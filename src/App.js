import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './screens/about';
import Dashboard from './screens/dashboard';
import Gallery from './screens/gallery';
import Home from './screens/home';

function App() {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <Router>
      <div className="App">
        <div className={`layout ${isSidebarMinimized ? 'sidebar-minimized' : 'sidebar-expanded'}`}>
          <Sidebar isMinimized={isSidebarMinimized} toggleSidebar={toggleSidebar} />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
