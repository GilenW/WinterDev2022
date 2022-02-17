//import '../src/App.css';
import '../src/Profilepage.css';
import SignedOut from './SignedOut';
import Profilepage from './Profilepage';
import Login from './Login';

function App() {

    return (

    <div className="App">
      <iframe id="topbar"></iframe>
      <h1 id="StudyBuddies">Study Buddies</h1>
      <button id="login">Login</button>
      <button id="signupSmall">Sign up</button>
      <p id="center">We need some kind of tagline here like
          Where students can find study buddies</p>
      <iframe id="noticebox"></iframe>
      <h2 id="notice">NOTICE</h2>
      <p id="disclaimer">On this site, your school email address is PUBLICLY AVAILABLE 
      to other users. By signing up, you agree to have your school email address 
      displayed on your profile.<br></br>
      When working with your study buddy, please be mindful of Academic Integrity 
      rules specified by the univsersity.</p>
 
  </div>
  );




}

export default App;

