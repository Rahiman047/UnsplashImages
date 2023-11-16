import Gallery from "./Gallery.jsx";
import SearchForm from "./SearchForm.jsx";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
