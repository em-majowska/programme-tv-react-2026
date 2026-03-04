import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Header />
      <main>
        {data.map((show) => {
          console.log(show);

          return (
            <Item
              time={show.time}
              title={show.title}
              type={show.type}
              image={show.image}
              duration={show.duration}
              // isUnseed={show.isUnseen}
              direct={show.direct}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
