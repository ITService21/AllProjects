export default function Test() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6">
                <img
                    className="w-full h-48 object-cover rounded-xl"
                    src="https://source.unsplash.com/random/400x300"
                    alt="Random"
                />
                <h2 className="text-2xl font-bold mt-4">Tailwind with Vite</h2>
                <p className="text-gray-600 mt-2">
                    This is a simple card component using Tailwind CSS in a Vite v3 project.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}
