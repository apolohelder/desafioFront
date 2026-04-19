import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loading } from '../components/Loading';

const Home = lazy(() => import('../pages/Home'));
const Repositories = lazy(() => import('../pages/Repositories'));
const User = lazy(() => import('../pages/User'));
const NotFound = lazy(() => import('../pages/NotFound'));

export function AppRoutes() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repo/:owner/:repo" element={<Repositories />} />
                <Route path="/user/:username" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}