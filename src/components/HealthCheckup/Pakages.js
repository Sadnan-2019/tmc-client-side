import React from 'react';

const Pakages = () => {
    return (
        <div className='bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]'>
              <h1 className="text-3xl text-white font-bold text-center py-5">All Packages</h1>
            {/* <!-- component --> */}
<table class="min-w-full border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"> Package Name</th>
				<th class="  p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Package Rate</th>
 
			</tr>
		</thead>
		<tbody class="text-white block md:table-row-group">
			<tr class="  border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">Dengue Recovery Package</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">Dengue Test Package</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">Diabetes Plan Health Check 1 (Under Plan)</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">Diabetes Plan Health Check 2 (Under Plan)</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">Diabetes Screening</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">Drug Screening</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">Essential Cardiac Screening</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">Essential Vitamin Check-Up</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">Excessive Hair Fall for Men</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
				 
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">VIEW DETAILS</button>
					{/* <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button> */}
				</td>
			</tr>
		 		
		</tbody>
	</table>
        </div>
    );
};

export default Pakages;