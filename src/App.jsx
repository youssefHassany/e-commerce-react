import Header from "./Header";
import Home from "./pages/Home/Home";
import Product from "./pages/product/Product";
import NotFound from "./pages/not found/NotFound";
import SearchResults from "./pages/search results/SearchResults";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

export const FetchedDataContext = createContext(null);

function App() {
  const API_URL = "http://localhost:3500/products";

  const [productsData, setProductsData] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProductsData(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  // for search functionality
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleSearch = (e) => {
    const searchVal = e.target.value;
    setSearch(searchVal);

    const matchedResults = productsData.filter((result) =>
      result.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setSearchList(matchedResults);
  };

  return (
    <main className="max-w-screen min-h-screen overflow-x-hidden">
      <Header />

      {productsData.length > 0 ? (
        <FetchedDataContext.Provider
          value={{ productsData, search, setSearch, searchList, handleSearch }}
        >
          {/* Your Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/results" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FetchedDataContext.Provider>
      ) : (
        <p className="text-3xl text-center mt-28">Loading...</p>
      )}
    </main>
  );
}

export default App;
