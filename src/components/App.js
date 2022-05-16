import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}


function About(){
  return (
    <dive id="about"> 
      <h2>About</h2>
    </dive>
  );
}


function App() {
  return (
    <div>
      <NavBar/>
      <Home/> 
      <About/>
    </div>
  );
}

export default App;
