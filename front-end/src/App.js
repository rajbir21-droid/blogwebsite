import Home from "./pages/home/Home";
import TopBar from "./component/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
//import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "./context/Context";
import Loading from "./component/Loader/Loading";
import ContactUs from "./component/ContactUs/ContactUs";
import './App.css';
function App() {
  const [loading,setloading]=useState(true);
  const { user } = useContext(Context);
  useEffect(()=>{
      setTimeout(()=>{
        setloading(false);
      },2300);
  },[]);
  return (
    loading?(<Loading/>):(
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/contactus"><ContactUs/></Route>
      </Switch>
      <Footer/>
    </Router>)
  );
}

export default App;
