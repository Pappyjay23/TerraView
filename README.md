<div align="center">
	<h1> TerraView </h1>
</div>

## Overview 🌍

TerraView is a modern dashboard application for monitoring environmental metrics and sustainability data. It provides real-time visualization of carbon emissions, energy usage, and sustainability scores to help organizations track their environmental impact.

## Snapshot 📸

![TerraView](https://github.com/user-attachments/assets/3b7fb125-7b60-4811-8407-6fdc3b9d8886)

### Key Features
- Real-time emissions monitoring
- Energy savings tracking
- Air quality metrics
- Weekly sustainability trends
- Resource usage analytics

### Design & Architecture
The application follows a component-based architecture using React, with:
- Modular components for each visualization
- Dynamic data fetching with date-range filtering
- Dark/Light theme support
- Responsive design for all screen sizes

### Assumptions
- Data is updated on a daily basis
- Emissions data includes transport, energy, and waste metrics
- Sustainability scores are calculated on a 0-100 scale
- Users need historical data access within a defined date range


## Tech Stack ✨

- [React.js](https://reactjs.org/) - UI Library
  - Chosen for its component-based architecture and robust ecosystem
- [Tailwind CSS](https://tailwindcss.com/) - Styling and UI
  - Provides rapid UI development with utility-first approach
- [Vite](https://vitejs.dev/) - Build tool
  - Offers faster development experience and optimized builds
- [Vercel](https://vercel.com/) - Hosting and Deployment
  - Enables seamless deployment and excellent performance

## Installation & Setup 💻

Follow these steps to run TerraView on your local machine.

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Clone this repository

```bash
git clone https://github.com/Pappyjay23/TerraView.git
```

### Navigate to the directory

```bash
cd TerraView
```

### Install Dependencies

```bash
npm install
```

### Run

Run the development server to view the app.

```bash
npm run dev
```

Now, you can navigate to http://localhost:5173/ to view the app.

### Build

```bash
npm run build
```

## Development Notes 📝
- The app uses mock data for development purposes
- Data visualization is handled using Recharts library
- Theme switching is managed through React Context

## Credits ✍

Implementation by [@Pappyjay23](https://github.com/Pappyjay23)
