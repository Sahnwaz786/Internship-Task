
import { ThemeProvider } from "./components/context/ThemeContext";
import MediaCard from "./components/Card";
import Collections from "./components/Collections";
import DrawerAppBar from "./components/context/Header";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="App">
        <DrawerAppBar />
        <MediaCard />
        <Collections />
        <Footer />
        {/* <Swipe/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
