import React from "react";
import "./Pakages.css"
const Pakages = () => {
  return (
    <div className="pakages ">
      <h1 className="text-3xl text-white font-bold text-center py-5">
        All Packages
      </h1>
      {/* <!-- component --> */}
      <table class="min-w-full border-collapse block md:table">
        <thead class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              {" "}
              Serial No
            </th>
            <th class="  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              {" "}
              Package Name
            </th>
            <th class="  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Package Rate
            </th>
            <th class="  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Package Rate
            </th>
          </tr>
        </thead>
        <tbody class="text-white block md:table-row-group">
          {/* <tr class="  border border-grey-500 md:border-none block md:table-row">
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Dengue Recovery Package
            </td>
            </tr>
            <tr>
              {" "}
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                Dengue Test Package
              </td>
            </tr> */}

          <tr>
            <td>1</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Dengue Recovery Package
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              1000TK
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button class="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white font-bold py-1 px-2 border border-blue-500 rounded">
                VIEW DETAILS
              </button>
            </td>
          </tr>

          <tr>
          <td>2</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Dengue Test Package
            </td>{" "}
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              1000TK
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button class="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white font-bold py-1 px-2 border border-blue-500 rounded">
                VIEW DETAILS
              </button>
            </td>
          </tr>
          <tr>
          <td>3</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Diabetes Plan Health Check 1 (Under Plan)
            </td>{" "}
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              1000TK
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button class="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white font-bold py-1 px-2 border border-blue-500 rounded">
                VIEW DETAILS
              </button>
            </td>
          </tr>
          <tr>
          <td>4</td>
            {" "}
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Diabetes Plan Health Check 2 (Under Plan)
            </td> <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              1000TK
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button class="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white font-bold py-1 px-2 border border-blue-500 rounded">
                VIEW DETAILS
              </button></td>
          </tr>
          <tr>
          <td>5</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Diabetes Screening
            </td>{" "}
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              1000TK
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button class="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white font-bold py-1 px-2 border border-blue-500 rounded">
                VIEW DETAILS
              </button>
            </td>
          </tr>
          <tr>
          <td>6</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Drug Screening
            </td>{" "}
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              1000TK
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button class="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white font-bold py-1 px-2 border border-blue-500 rounded">
                VIEW DETAILS
              </button>
            </td>
          </tr>
          <tr>
          <td>7</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Essential Cardiac Screening
            </td> <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              1000TK
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button class="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white font-bold py-1 px-2 border border-blue-500 rounded">
                VIEW DETAILS
              </button></td>
          </tr>
          <tr>
          <td>8</td>
            {" "}
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Essential Vitamin Check-Up
            </td>{" "}
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              1000TK
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button class="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white font-bold py-1 px-2 border border-blue-500 rounded">
                VIEW DETAILS
              </button>
            </td>
          </tr>
          <tr>
          <td>9</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              Excessive Hair Fall for Men
            </td>{" "}
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              1000TK
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button class="bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white font-bold py-1 px-2 border border-blue-500 rounded">
                VIEW DETAILS
              </button>
            </td>
          </tr>


          
        </tbody>
      </table>
    </div>
  );
};

export default Pakages;
