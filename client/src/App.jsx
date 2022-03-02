import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Collection from "./pages/Collection";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import PackingList from "./pages/PackingList";
import Map from "./pages/Map";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roadtrip' element={<Map />} />
        <Route path='/roadtrip/:id' element={<Map />} />
        <Route path='/collections' element={<Collection />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/packing-list' element={<PackingList />} />
      </Routes>
    </div>
  );
}

export default App;
