import { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://improt-exprot-hub-server-side.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="overflow-x-auto bg-white shadow rounded p-4">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-emerald-100">
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={item._id} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border px-4 py-2">{idx + 1}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
