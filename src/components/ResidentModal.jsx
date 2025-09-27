import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const FilterModal = ({ isOpen, onClose, onSave }) => {
  const [filters, setFilters] = useState({
    city: "",
    locality: "",
    budget: [1000, 50000], // min-max
    gender: "",
    preferredBy: "",
    occupancy: "",
  });

  // City -> Localities mapping
  const cityLocalities = {
    Dhaka: ["Shamoli", "Dhanmondi", "Gulshan"],
    Chittagong: ["Pahartali", "Panchlaish", "Agrabad"],
    Sylhet: ["Zindabazar", "Amberkhana", "Shibganj"],
  };

  const handleRangeChange = (e, index) => {
    const value = Number(e.target.value);
    const newBudget = [...filters.budget];
    newBudget[index] = value;
    setFilters({ ...filters, budget: newBudget });
  };

  const handleSave = () => {
    onSave(filters);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white p-6 rounded-xl shadow-xl max-w-lg mx-auto   relative"
      overlayClassName="fixed inset-0 bg-[#00000096] bg-opacity-50 flex justify-center items-start z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
      >
        ✕
      </button>

      {/* City */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold mb-2">City</h2>
        <div className="flex gap-3 flex-wrap">
          {Object.keys(cityLocalities).map((city) => (
            <button
              key={city}
              onClick={() =>
                setFilters({ ...filters, city, locality: "" }) // reset locality if city changes
              }
              className={`px-4 py-2 rounded-full border ${
                filters.city === city
                  ? "bg-[#80bf1e] text-white"
                  : "bg-gray-100"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Locality (depends on City) */}
      {filters.city && (
        <div className="mb-5">
          <h2 className="text-lg font-semibold mb-2">Locality</h2>
          <div className="flex gap-3 flex-wrap">
            {cityLocalities[filters.city].map((loc) => (
              <button
                key={loc}
                onClick={() => setFilters({ ...filters, locality: loc })}
                className={`px-4 py-2 rounded-full border ${
                  filters.locality === loc
                    ? "bg-[#80bf1e] text-white"
                    : "bg-gray-100"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Budget */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold mb-2">Budget</h2>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="1000"
            max="50000"
            value={filters.budget[0]}
            onChange={(e) => handleRangeChange(e, 0)}
            className="green-slider mb-3"
          />
        </div>
        <p>
          ৳{filters.budget[0]} - ৳{filters.budget[1]}
        </p>
      </div>

      {/* Gender */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold mb-2">Gender</h2>
        <div className="flex gap-3">
          {["Male", "Female"].map((g) => (
            <button
              key={g}
              onClick={() => setFilters({ ...filters, gender: g })}
              className={`px-4 py-2 rounded-full border ${
                filters.gender === g
                  ? "bg-[#80bf1e] text-white"
                  : "bg-gray-100"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Preferred By */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold mb-2">Preferred By</h2>
        <div className="flex gap-3">
          {["Student", "Working Professional"].map((p) => (
            <button
              key={p}
              onClick={() => setFilters({ ...filters, preferredBy: p })}
              className={`px-4 py-2 rounded-full border ${
                filters.preferredBy === p
                  ? "bg-[#80bf1e] text-white"
                  : "bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Occupancy */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold mb-2">Occupancy</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Single Occupancy",
            "Double Occupancy",
            "Triple Occupancy",
            "Quadruple Occupancy",
            "Quintuple Occupancy",
            "Dorm",
          ].map((o) => (
            <button
              key={o}
              onClick={() => setFilters({ ...filters, occupancy: o })}
              className={`px-4 py-2 rounded-full border ${
                filters.occupancy === o
                  ? "bg-[#80bf1e] text-white"
                  : "bg-gray-100"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-5">
        <button
          onClick={() =>
            setFilters({
              city: "",
              locality: "",
              budget: [5000, 20000],
              gender: "",
              preferredBy: "",
              occupancy: "",
            })
          }
          className="text-green-500"
        >
          Clear
        </button>
        <button
          onClick={handleSave}
          className="bg-[#80bf1e] px-5 py-2 rounded-lg text-white"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default function ResidentModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(null);

  return (
    <div className="p-10">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#80bf1e] px-6 py-2 rounded-lg text-white"
      >
        Open Filters
      </button>

      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(filters) => setAppliedFilters(filters)}
      />

      {appliedFilters && (
        <div className="mt-5 p-4 border rounded-lg">
          <h3 className="font-bold mb-2">Applied Filters:</h3>
          <pre className="bg-gray-100 p-3 rounded">
            {JSON.stringify(appliedFilters, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
