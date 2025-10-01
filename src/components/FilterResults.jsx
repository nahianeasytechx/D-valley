import React, { useState } from "react";
import Modal from "react-modal";
import { residencies } from "../data/residencies";
import { Link } from "react-router-dom";

Modal.setAppElement("#root"); // keep accessibility

export default function FilterResults({ filters }) {
  const [selectedRes, setSelectedRes] = useState(null); // track which residency is clicked

  // Filtering logic
const filteredResidencies = filters
  ? residencies.filter((res) => {
      return (
        (!filters.city || res.city.toLowerCase() === filters.city.toLowerCase()) &&
        (!filters.locality || res.locality.toLowerCase() === filters.locality.toLowerCase()) &&
        (!filters.gender || res.gender.toLowerCase() === filters.gender.toLowerCase()) &&
        (!filters.preferredBy || res.preferredBy.toLowerCase() === filters.preferredBy.toLowerCase()) &&
        (!filters.occupancy || res.occupancy.toLowerCase() === filters.occupancy.toLowerCase()) &&
        res.budget >= filters.budget[0] &&
        res.budget <= filters.budget[1]
      );
    })
  : residencies;

  return (
    <div className="mt-6 px-2 lg:pl-0 w-[100%]">
      <h2 className="text-xl font-bold mb-3">Explore Residencies</h2>

      {filteredResidencies.length > 0 ? (
        <div className="space-y-3">
          {filteredResidencies.map((res) => (
            <div
              key={res.id}
              className="w-full border border-slate-100 rounded-lg shadow-sm bg-gray-50 flex"
            >
<Link to={`/explore-residencies/${res.slug}`}>
              <img
                src={res.image}
                alt=""
                className="w-[200px] lg:w-[300px] rounded-l-lg"
              />
</Link>
              <div className="p-4 flex-1">
              <Link to={`/explore-residencies/${res.slug}`}>
                <h3 className="font-semibold">{res.name}</h3>
              </Link>
                <p className="text-xs md:text-sm ">
                  {res.locality}, {res.city}
                </p>
                <p className="text-[#18a80b] font-semibold">৳{res.budget}</p>
                <p className="text-sm">
                  {res.gender} | {res.preferredBy} | {res.occupancy}
                </p>
                <div className="mt-5 lg:mt-10">
                  <button
                    onClick={() => setSelectedRes(res)} // open modal for this residency
                    className="w-full bg-[#80bf1e] py-2 px-2 rounded-xl text-white text-[10px] md:text-xs lg:text-base cursor-pointer"
                  >
                    Schedule a Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No residencies match your filters.</p>
      )}

      {/* Modal */}
      <Modal
        isOpen={!!selectedRes}
        onRequestClose={() => setSelectedRes(null)}
        className="bg-white p-6 rounded-xl shadow-xl max-w-md mx-auto relative"
        overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      >
        <button
          onClick={() => setSelectedRes(null)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {selectedRes && (
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Schedule a Visit for {selectedRes.name}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Location: {selectedRes.locality}, {selectedRes.city}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Budget: ৳{selectedRes.budget}
            </p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-3 py-2 rounded-lg"
              />

              <input
                type="tel"
                 placeholder="Your mobile number"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-[#80bf1e] py-2 rounded-lg text-white"

              >
                Confirm Visit
              </button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}
