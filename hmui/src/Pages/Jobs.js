// Jobs.jsx

import React, { useEffect, useState, createContext } from 'react';
import JobSearchSideBar from '../Components/Forms/JobSearchSideBar';
import JobCard from '../Components/JobCard';
import axios from 'axios';
import Loader from '../Components/Loader';

const MyContext = createContext();

const Jobs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    jobStatus: 'All',
    department: 'All',
    location: 'All',
  });

  useEffect(() => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      setLoading(true);
      axios.get(`http://localhost:5000/api/jobs/hr/${userInfo._id}`).then((response) => {
        setData(response.data);
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const filterJobs = () => {
    return data.filter((item) => {
      if (
        (filters.jobStatus === 'All' || item.status === filters.jobStatus) &&
        (filters.department === 'All' || item.department === filters.department) &&
        (filters.location === 'All' || item.location === filters.location)
      ) {
        return true;
      }
      return false;
    });
  };

  return (
    <>
      <div className="flex flex-row p-5">
        <div className="basis-1/4 rounded-lg">
          <JobSearchSideBar setFilters={setFilters} />
        </div>
        <div className="basis-3/4">
          <div className="m-2 h-10 bg-slate-100 pl-2 text-2xl rounded-lg">
            Jobs <span>({data.length})</span>
          </div>
          <div className="flex flex-wrap">
            {loading && <Loader />}
            {filterJobs().map((item) => (
              <MyContext.Provider value={item} key={item._id}>
                <JobCard id={item._id} title={item.title} dep={item.department} req={item.recruitmentQuota} jt={item.jobType} />
              </MyContext.Provider>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
