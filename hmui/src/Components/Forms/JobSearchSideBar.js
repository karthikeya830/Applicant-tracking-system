// JobSearchSideBar.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const departments = ["All", "Sales", "Marketing", "Engineering", "Finance"];
const locations = ["All", "Hyderabad", "Mumbai", "Bangalore", "Delhi", "Chennai"];

const JobSearchSideBar = ({ setFilters }) => {
  const [filterState, setFilterState] = useState({
    jobStatus: "All",
    department: "All",
    location: "All",
  });

  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("./addJob");
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFilters(filterState); // Update the filters in the parent component (Jobs)
  };

  return (
    <div className="max-w-sm flex flex-col rounded-l overflow-hidden m-5 mt-1 h-fit relative rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300">
      <div className="px-4 py-5 sm:p-6">
        <div className="mt-5">
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleClick}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Add New Job
            </button>

            <div>
              <h4 className="text-sm font-medium text-gray-500">Job Status</h4>
              <div className="mt-2">
                <div className="flex items-center">
                  <input
                    id="status1"
                    name="jobStatus"
                    type="radio"
                    value="All"
                    checked={filterState.jobStatus === "All"}
                    onChange={handleFilterChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="status1" className="ml-3">
                    All
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="status2"
                    name="jobStatus"
                    type="radio"
                    value="Open"
                    checked={filterState.jobStatus === "Open"}
                    onChange={handleFilterChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="status2" className="ml-3">
                    Open
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="status3"
                    name="jobStatus"
                    type="radio"
                    value="Closed"
                    checked={filterState.jobStatus === "Closed"}
                    onChange={handleFilterChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="status3" className="ml-3">
                    Closed
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={filterState.department}
                onChange={handleFilterChange}
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                {departments.map((department) => (
                  <option className="bg-white hover:bg-gray-200" key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                id="location"
                name="location"
                value={filterState.location}
                onChange={handleFilterChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchSideBar;
