import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Repositories } from '../pages/Repositories';
import { User } from '../pages/User';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repo/:owner/:repo" element={<Repositories />} />
            <Route path="/user/:username" element={<User />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}