import React, { useState } from 'react';

const SearchBar = ({ fetchJobsCustom }) => {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: ""
    });

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const search = async () => {
        // Check if all criteria are selected
        if (jobCriteria.title && jobCriteria.location && 
            jobCriteria.experience && jobCriteria.type) {
            await fetchJobsCustom(jobCriteria);
        } else {
            alert("Please fill in all search criteria");
        }
    };

    return (
        <div className="flex gap-4 my-10 justify-center px-10">
            {/* Job Role Dropdown */}
            <select 
                onChange={handleChange} 
                name='title'
                value={jobCriteria.title}
                aria-label="Job Role"
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
            >
                <option value="" disabled hidden>Job Role</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Developer Advocate">Developer Advocate</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                <option value="AI Engineer">AI Engineer</option>
                <option value="Cloud Engineer">Cloud Engineer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Cybersecurity Specialist">Cybersecurity Specialist</option>
                <option value="Game Developer">Game Developer</option>
                <option value="Blockchain Developer">Blockchain Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value="Embedded Systems Engineer">Embedded Systems Engineer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Site Reliability Engineer">Site Reliability Engineer</option>
                <option value="Mobile App Developer">Mobile App Developer</option>
                <option value="AR/VR Developer">AR/VR Developer</option>
            </select>

            {/* Job Type Dropdown */}
            <select 
                onChange={handleChange}
                name='type'
                value={jobCriteria.type}
                aria-label="Job Type"
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
            >
                <option value="" disabled hidden>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Temporary">Temporary</option>
                <option value="Freelance">Freelance</option>
                <option value="Remote">Remote</option>
                <option value="On-Site">On-Site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Volunteer">Volunteer</option>
            </select>

            {/* Location Dropdown */}
            <select 
                onChange={handleChange}
                name='location'
                value={jobCriteria.location}
                aria-label="Location"
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
            >
                <option value="" disabled hidden>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-Site">On-Site</option>
                <option value="Work from Anywhere">Work from Anywhere</option>
                <option value="Flexible Location">Flexible Location</option>
                <option value="Multiple Locations">Multiple Locations</option>
            </select>

            {/* Experience Dropdown */}
            <select 
                onChange={handleChange}
                name='experience'
                value={jobCriteria.experience}
                aria-label="Experience"
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
            >
                <option value="" disabled hidden>Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Intern">Intern</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Managerial">Managerial</option>
                <option value="Executive Level">Executive Level</option>
            </select>

            {/* Search Button */}
            <button 
                onClick={search}
                type="button"
                className="w-64 bg-violet-600 text-white font-bold py-3 rounded-md"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;