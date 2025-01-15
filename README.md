# Job-Nest

Job-Nest is a modern job search platform designed to connect job seekers with opportunities in the technology sector. Built with **React** and **Firebase**, it features a sophisticated search system, real-time job listings, and a responsive user interface optimized for various devices.

## Key Features

### Search System
- **Multi-criteria job filtering**:
  - 22+ technology roles (e.g., AI Engineer, Full Stack Developer, Cloud Engineer)
  - 10 employment types (Full Time, Remote, Contract, etc.)
  - 7 location options (Remote, In-Office, Hybrid, etc.)
  - 8 experience levels (from Fresher to Executive)
- Real-time filter application without page reload
- Clear filter functionality with state persistence

### Job Listings
- Dynamic job cards displaying:
  - Position title and company name
  - Employment type, experience level, and location
  - Required skills with visual tags
  - Intelligent timestamp display ("Posted X days ago")
  - Direct application link
- Hover animations and visual feedback
- Responsive layout adapting to different screen sizes

## Technical Architecture

### Frontend
- **React.js** for component-based architecture
- **Tailwind CSS** for styling and animations
- **Day.js** for intelligent date handling
- **Custom hooks** for state management
- **Responsive design principles** for multi-device compatibility

### Backend
- **Firebase Firestore** for real-time database
- Complex query handling with multiple filter criteria
- Ordered data retrieval with timestamp-based sorting
- Efficient data structure for job listings

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/aryan-srivastava1625/Job-Nest
   ```
2. Navigate to the project directory:
   ```bash
   cd job-nest
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development
Start the development server:
```bash
npm run dev
# or
yarn dev
```


## Tools and Technologies
- **React.js** for building UI components
- **Vite** for a fast development environment
- **Firebase Firestore** for the backend
- **Tailwind CSS** for styling
- **Day.js** for date manipulation



---

### Additional Resources
- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)

Feel free to contribute by opening issues or submitting pull requests!
