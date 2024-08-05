import './App.css';
import Navbar from './components/Navbar';//
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title='TextUtils' home="Home" about="About" />
      <div className="container">
        <h3>Enter Text Below</h3>
        <TextForm />
      </div>
    </>
  );
}

export default App;
