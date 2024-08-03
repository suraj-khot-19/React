import './App.css';
let name = "Suraj";
function App() {
  return (
    <>
      <p>trying to print name variable <b>name</b></p>
      {/* not printing variable name */}
      <p>trying to print name variable<b>{name}</b> </p>
      {/* it will print variable name */}

    </>
  );
}

export default App;
