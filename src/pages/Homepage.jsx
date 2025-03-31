import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import coffequipment from '../assets/coffequipment.jpg'
import coffees from '../assets/coffees.jpg'

function Homepage() {
  return (
    <>
      <Hero />
      <div className="mt-10 mb-20 p-2 flex justify-center items-center gap-5 flex-col sm:flex-row sm:gap-5">
        {/* Coffee Product */}
        <div className="group relative h-140 w-130 bg-[#f5f5f5] shadow-[#00000059_0px_5px_15px] rounded">
          <Link to="/coffeelists"> <div className="absolute">
            <img
              className="h-140 w-130 rounded"
              src={coffequipment}
              alt="nature-pic-CSSnippets"
            />
          </div>
          </Link>
          <div className="rounded transition-height absolute bottom-0 h-10 w-full overflow-hidden bg-[#00000080] p-2.5 text-white shadow-[0_3px_10px_#00000033] duration-500 ease-in-out group-hover:h-18">
            <label className="font-bold">Coffes</label>
            <p className="mt-2 text-sm">Varieties of speciality coffees</p>
          </div>
        </div>

        {/* Equipment Product */}
        <div className="group relative h-140 w-130 bg-[#f5f5f5] shadow-[#00000059_0px_5px_15px] rounded">
        <Link to="/equipmentlists"> <div className="absolute">
            <img
              className="h-140 w-130 rounded"
              src={coffees}
              alt="nature-pic-CSSnippets"
            />
          </div>
          </Link>
          <div className="rounded transition-height absolute bottom-0 h-10 w-full overflow-hidden bg-[#00000080] p-2.5 text-white shadow-[0_3px_10px_#00000033] duration-500 ease-in-out group-hover:h-18">
            <label className="font-bold">Equipments</label>
            <p className="mt-2 text-sm">High quality coffee Equipments</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
