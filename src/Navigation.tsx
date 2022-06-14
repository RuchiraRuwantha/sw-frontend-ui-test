import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Main from './components/layouts/main';
import Teams from './pages/teams';
import Campaign from './pages/campaign';
import Leads from './pages/leads';
import Reports from './pages/reports';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route path='/' element={<Navigate to="/teams" replace />} />
                    <Route path='campaigns' element={<Campaign />} />
                    <Route path='reports' element={<Reports />} />
                    <Route path='leads' element={<Leads />} />
                    <Route path='teams' element={<Teams />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;