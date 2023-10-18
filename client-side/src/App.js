import './App.css';
import BannerComponent from './components/BannerComponent';
import Footer from './components/Footer';
import SearchComponent from './components/SearchComponent';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <BannerComponent />
        <SearchComponent />
      </div>
      <Footer />
    </main>
  );
}

export default App;
