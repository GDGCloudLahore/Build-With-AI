import Wrap from "./components/GGLIO-Wrap/Wrap";
import JoinDc from "./components/Discord/JoinDc";
import Topics from "./components/Topics/Topics";

import "./App.css";
// import "./index.css"
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="w-full h-full   ">
      <div className="fixed bottom-2 right-2  ">
        <button className="px-8 p-4 rounded-xl transition-all opacity-30 hover:opacity-100 border-2 border-transparent text-[1.2em]  hover:bg-gdggreen-600 dark:hover:bg-gdggreen-600 text-white dark:bg-gdggreen-500 bg-gdggreen-500">
          <a href="https://forms.gle/yhJmmZiqU4F8bhqD9">Register Now !</a>
        </button>
      </div>
      <Navbar />
      <main className=" max-width  pt-12 lg:p-12 flex flex-col justify-start items-center gap-8 ">
        <Wrap />
        <Carousel />
        <JoinDc />
        <Topics />
      </main>
      <Footer />
    </div>
  );
}

export default App;
