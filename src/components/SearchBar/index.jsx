import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex gap-4 my-10 justify-center px-10 '>
      <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Job Role</option>
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

      <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' >
        <option value="" disabled hidden selected>Job Type</option>
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

      <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
        <option value="On-Site">On-Site</option>
        <option value="Work from Anywhere">Work from Anywhere</option>
        <option value="Flexible Location">Flexible Location</option>
        <option value="Multiple Locations">Multiple Locations</option>
      </select>

      <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
      <option value="" disabled hidden selected>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Intern">Intern</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
        <option value="Team Lead">Team Lead</option>
        <option value="Managerial">Managerial</option>
        <option value="Executive Level">Executive Level</option>
      </select>

      <button className='w-64 bg-violet-600 text-white font-bold py-3 rounded-md'>Search</button>


      
    
    </div>
  )
}

export default SearchBar
