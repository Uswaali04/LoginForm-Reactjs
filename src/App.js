import FormCard from "./components/FormCard";
import Header from "./components/Header";
import Logo from "./components/Logo";
function App() {
  return (
    <>
      <div className="container">
        <div className="form">
          <Header/>
          <Logo/>
          <FormCard/>
        </div>
      </div>

    </>
  );
}

export default App;
