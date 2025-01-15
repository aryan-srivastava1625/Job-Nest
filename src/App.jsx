import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "./JobDummyData";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from './firebase.config'

function App() {

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async()=>{
    const tempJobs = []
    const q = query(collection(db, "jobs"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
    // console.log(doc.id, " => ", doc.data());
    tempJobs.push({
      ...job.data(),
      id:job.id,
      postedOn: job.data().postedOn.toDate()
    })   
  });
  setJobs(tempJobs);

}

  useEffect(()=>{
    fetchJobs()
  },[])


  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {/* Map over job data and render JobCard components */}
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
