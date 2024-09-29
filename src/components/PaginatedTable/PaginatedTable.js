import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import "./PaginatedTable.css"
const PaginatedTable = () => {

    const data = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `Name ${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: `+1234567890${i + 1}`,
      }));

      

       // State for active page and items per page
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 10;

  // Get the current items for the active page
  const indexOfLastItem = activePage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
    return (
        <div>
            <div>
      <h2>Paginated Table</h2>

      {/* Table displaying paginated data */}
      <table className='bg-red-600' border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination component */}
      <div className="pagination-container">
        <Pagination className="pagination"
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={data.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
        </div>
    );
};

export default PaginatedTable;