import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "./JobDummyData";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {/* Map over job data and render JobCard components */}
      {jobData.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
