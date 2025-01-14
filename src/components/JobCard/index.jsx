import dayjs from 'dayjs';
import React from 'react'

const JobCard = () => {
    const skills = [
        "JavaScript","Node.js","React.js",
        // "HTML","CSS","MongoDB","Express.js","Angular",
        // "Vue.js","Python","Django","Flask","SQL","PostgreSQL","MySQL","C++","Java","TypeScript",
        // "Git",
        // "Docker",
        // "Kubernetes",
        // "AWS",
        // "Azure",
        // "Google Cloud Platform",
        // "Linux",
        // "REST APIs",
        // "GraphQL",
        // "Firebase",
        // "Redis",
        // "Jenkins",
        // "Webpack",
        // "Babel",
        // "Bootstrap",
        // "Tailwind CSS",
        // "SASS/SCSS",
        // "Machine Learning",
        // "Artificial Intelligence",
        // "TensorFlow",
        // "PyTorch",
        // "OpenCV",
        // "Data Analysis",
        // "Pandas",
        // "NumPy",
        // "Matplotlib",
        // "Power BI",
        // "Tableau"
      ];

      const date1 = dayjs(Date.now());
      const diffInDays = date1.diff('2024-01-12','day');
      
  return (
    <div className='mx-40 mb-4 '>
      <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-purple-600 hover:translate-y-2 hover:scale-104'>
        <div className='flex flex-col items-start gap-3'>
            <h1 className='text-lg font-semibold'>Frontend Developer ~ Amazon</h1>
            <p>Full Time -Fresher -In-Office</p>
            <div className='flex items-center gap-2'>
                {skills.map((skill)=>(
                    <p key={skill} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                ))}
            </div>
        </div>
        <div>
            <p>Posted {diffInDays} ago</p>
            <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default JobCard
