import Footer from "./components/Footer";
import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Grid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
