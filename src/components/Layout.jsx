
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="min-h-screen text-white/90">
            <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient-xy"></div>
            <div className="fixed inset-0 z-[-1] opacity-30">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <Navbar />
            <main className="container mx-auto px-4 py-8 pt-24 min-h-[calc(100vh-100px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
