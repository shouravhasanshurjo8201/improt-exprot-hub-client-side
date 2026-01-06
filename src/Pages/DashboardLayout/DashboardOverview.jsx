import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FaBox, FaUsers, FaChartLine, FaArrowUp, FaGlobe, FaShoppingCart } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DashboardOverview = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalUsers: 0,
        myProducts: 0
    });

    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 800 },
        { name: 'May', value: 500 },
    ];

    useEffect(() => {
        fetch("https://improt-exprot-hub-server-side.vercel.app/Products")
            .then(res => res.json())
            .then(data => {
                const myItems = data.filter(p => p.Exporter_Email === user?.email);
                setStats(prev => ({ ...prev, totalProducts: data.length, myProducts: myItems.length }));
            });

        if (user?.role === 'admin') {
            fetch("https://improt-exprot-hub-server-side.vercel.app/users")
                .then(res => res.json())
                .then(data => setStats(prev => ({ ...prev, totalUsers: data.length })));
        }
    }, [user]);

    const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-zinc-800 dark:text-white">
                        Hello, <span className="text-emerald-500">{user?.displayName?.split(' ')[0]}!</span>
                    </h1>
                    <p className="text-gray-500 font-medium">Here's what's happening with your hub today.</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 px-6 py-3 rounded-2xl shadow-sm border border-emerald-100 dark:border-zinc-800">
                    <span className="text-xs font-bold text-gray-400 uppercase">Current Role:</span>
                    <p className="text-emerald-600 font-black uppercase tracking-widest">{user?.role || "User"}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-zinc-800 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 bg-emerald-500/10 w-24 h-24 rounded-full group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center gap-5">
                        <div className="bg-emerald-500 p-4 rounded-2xl text-white shadow-lg shadow-emerald-200 dark:shadow-none">
                            <FaBox size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Total Marketplace</p>
                            <h2 className="text-3xl font-black text-zinc-800 dark:text-white">{stats.totalProducts}</h2>
                        </div>
                    </div>
                </div>

                {user?.role === 'admin' ? (
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-zinc-800 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 bg-blue-500/10 w-24 h-24 rounded-full group-hover:scale-110 transition-transform"></div>
                        <div className="flex items-center gap-5">
                            <div className="bg-blue-500 p-4 rounded-2xl text-white shadow-lg shadow-blue-200 dark:shadow-none">
                                <FaUsers size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Registered Users</p>
                                <h2 className="text-3xl font-black text-zinc-800 dark:text-white">{stats.totalUsers}</h2>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-zinc-800 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 bg-amber-500/10 w-24 h-24 rounded-full group-hover:scale-110 transition-transform"></div>
                        <div className="flex items-center gap-5">
                            <div className="bg-amber-500 p-4 rounded-2xl text-white shadow-lg shadow-amber-200 dark:shadow-none">
                                <FaChartLine size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">My Listings</p>
                                <h2 className="text-3xl font-black text-zinc-800 dark:text-white">{stats.myProducts}</h2>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-zinc-900 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="bg-emerald-500 p-4 rounded-2xl text-white">
                            <FaGlobe size={24} className="animate-spin-slow" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-zinc-500 uppercase tracking-tighter">Global Reach</p>
                            <h2 className="text-3xl font-black text-white">Active</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-black text-xl text-zinc-800 dark:text-white">Market Analysis</h3>
                        <span className="flex items-center gap-1 text-emerald-500 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                            <FaArrowUp size={10} /> +12.5%
                        </span>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                                <YAxis hide />
                                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                                <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={40}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 3 ? '#10b981' : '#e2e8f0'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-emerald-500 p-8 rounded-[2.5rem] text-white flex flex-col justify-between">
                    <div>
                        <FaShoppingCart size={40} className="mb-6 opacity-50" />
                        <h3 className="text-2xl font-black mb-2">Trade Securely</h3>
                        <p className="text-emerald-100 text-sm leading-relaxed">
                            Your account is fully verified for international trade and transactions.
                        </p>
                    </div>
                    <button className="bg-white text-emerald-600 font-black py-4 rounded-2xl shadow-lg mt-6 hover:bg-emerald-50 transition-colors">
                        Explore Market
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;