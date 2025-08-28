import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import ChallanList from "./components/ChallanList";
import StatusHistory from "./components/StatusHistory";
import WelcomePage from "./components/WelcomePage";
import Footer from "./components/Footer";
import mockData from "./data/mockData.json";


function App() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [challans, setChallans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  const [searched, setSearched] = useState(false);

  const goHome = () => {
    setVehicleNumber("");
    setChallans([]);
    setFilter("All");
    setError("");
    setSearched(false);
  };

  const fetchChallans = (number) => {
    setVehicleNumber(number);
    setSearched(true);
    setLoading(true);
    setError("");
    setChallans([]);
  
    setTimeout(() => {
      const data = mockData.filter(
        (v) => v.vehicleNumber.toUpperCase() === number.toUpperCase()
      );
  
      if (data.length > 0) {
        setChallans(data[0].challans);
      } else {
        setError("No records found for this vehicle 🚗");
      }
  
      setLoading(false);
    }, 500); // simulate loading delay
  };
  

  const filteredChallans = challans.filter((ch) => {
    if (filter === "All") return true;
    return ch.status === filter;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header onHomeClick={goHome} />

      <main className="flex-grow flex flex-col items-center p-6 w-full">
        <SearchBar onSearch={fetchChallans} />

        {!searched && <WelcomePage />}

        {challans.length > 0 && (
          <div className="flex gap-2 mb-4 flex-wrap justify-center">
            {["All", "Paid", "Pending"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded ${
                  filter === status
                    ? "bg-blue-600 text-white"
                    : "bg-white border text-gray-700 hover:bg-gray-100"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}

        {loading && <Loader />}
        {error && <p className="text-red-600 font-semibold">{error}</p>}

        {!loading && !error && filteredChallans.length > 0 && (
          <>
            <ChallanList challans={filteredChallans} />
            <StatusHistory challans={filteredChallans} vehicleNumber={vehicleNumber} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
