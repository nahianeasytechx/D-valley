import { residencies } from "../data/residencies";

export default function FilterResults({ filters }) {
  // If filters is null/undefined, show all residencies
  const filteredResidencies = filters
    ? residencies.filter((res) => {
        return (
          (!filters.city || res.city === filters.city) &&
          (!filters.locality || res.locality === filters.locality) &&
          (!filters.gender || res.gender === filters.gender) &&
          (!filters.preferredBy || res.preferredBy === filters.preferredBy) &&
          (!filters.occupancy || res.occupancy === filters.occupancy) &&
          res.budget >= filters.budget[0] &&
          res.budget <= filters.budget[1]
        );
      })
    : residencies; // no filters → show all

  return (
    <div className="mt-6 px-2 lg:pl-0 w-[100%]">
      <h2 className="text-xl font-bold mb-3">Explore Residencies</h2>
      {filteredResidencies.length > 0 ? (
        <div className="space-y-3">
          {filteredResidencies.map((res) => (
            <>
              <div
                key={res.id}
                className="w-full border border-slate-100  rounded-lg shadow-sm bg-gray-50 flex "
              >
                <img
                  src={res.image}
                  alt=""
                  className=" w-[200px] lg:w-[300px] rounded-l-lg"
                />
                <div className="p-4 flex-1">
                  <h3 className="font-semibold">{res.name}</h3>
                  <p className="text-xs md:text-sm ">
                    {res.locality}, {res.city}
                  </p>
                  <p className="text-[#18a80b] font-semibold">৳{res.budget}</p>
                  <p className="text-sm">
                    {res.gender} | {res.preferredBy} | {res.occupancy}
                  </p>
                  <div className=" mt-5 lg:mt-10  ">
                    <button className="w-full bg-[#80bf1e] py-2 px-2 rounded-xl text-white text-[10px] md:textxs lg:text-base cursor-pointer">Schedule a Visit</button>
                 
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No residencies match your filters.</p>
      )}
    </div>
  );
}
