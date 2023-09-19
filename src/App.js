import BookList from "./Components/Booklist";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import ThemeToggle from "./Components/ThemeToggle";
import BookContextProvider from "./Store/BookContext";
import ThemeContextProviders from "./Store/Context";
import CounterContextProvider from "./Store/Counter";

function App() {
  return (
    <ThemeContextProviders>
      <CounterContextProvider>
        <div style={{ width: "600px", margin: " 50px auto" }}>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
          <Counter />
        </div>
      </CounterContextProvider>
    </ThemeContextProviders>
  );
}

export default App;
