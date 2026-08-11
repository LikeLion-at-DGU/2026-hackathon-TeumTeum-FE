import { Routes, Route } from 'react-router-dom'
import LandingPage from "../pages/LandingPage.jsx"
import ProjectPage from "../pages/ProjectPage.jsx"
import TeamPage from "../pages/TeamPage.jsx"

function Router() {
    return (
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/project" element={<ProjectPage />} />
        </Routes>
    )
}

export default Router