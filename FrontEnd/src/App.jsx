import RoutesPG from "./routes/RoutesPG";
import Navbar from "./components/navbar";

function App() {
  return (
    <main>
      <section className="content">
        <section className="each_page">
          <Navbar />
          <RoutesPG />
        </section>
      </section>
    </main>
  );
}

export default App;
