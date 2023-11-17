import Gallery from "./Gallery.jsx";
import SearchForm from "./SearchForm.jsx";
import ThemeToggle from "./ThemeToggle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
      <ToastContainer />
    </main>
  );
};
export default App;
