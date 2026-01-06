import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://improt-exprot-hub-server-side.vercel.app/users") 
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const makeAdmin = (id) => {
        fetch(`https://improt-exprot-hub-server-side.vercel.app/users/role/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ role: "admin" })
        })
        .then(res => res.json())
        .then(() => {
            toast.success("User is now Admin!");
        });
    };

    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-black mb-6">Manage Users</h2>
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                        <th className="pb-4">Name</th>
                        <th className="pb-4">Email</th>
                        <th className="pb-4">Role</th>
                        <th className="pb-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u._id} className="border-b last:border-0">
                            <td className="py-4">{u.name}</td>
                            <td>{u.email}</td>
                            <td><span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">{u.role}</span></td>
                            <td>
                                {u.role !== 'admin' && <button onClick={() => makeAdmin(u._id)} className="text-xs bg-zinc-800 text-white px-3 py-1 rounded-lg">Make Admin</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;