import { ToastContainer } from "react-toastify";
import Home from './Components/Home';

function App() {
  return (
    <>
    <Home/>
      <ToastContainer autoClose={4000} hideProgressBar theme="colored" />
    </>
  );
}

export default App;
