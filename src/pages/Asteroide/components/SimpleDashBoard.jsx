import React from 'react';

const SimpleDashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Oldalsó sáv */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-gray-700">
          <span className="text-xl font-semibold">Dashboard</span>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Logout</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Fő tartalom */}
      <main className="flex-1 bg-gray-100 p-6">
        <header className="h-16 bg-white shadow flex items-center px-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </header>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Card 1</h2>
            <p className="text-gray-700">Some content...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Card 2</h2>
            <p className="text-gray-700">Some content...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Card 3</h2>
            <p className="text-gray-700">Some content...</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SimpleDashboard;
