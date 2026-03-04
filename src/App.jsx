import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Header />
      <main>
        {data.map((show, index) => {
          return <Item key={`${index} ${show.title}`} show={show} />;
        })}
      </main>
    </>
  );
}

export default App;
