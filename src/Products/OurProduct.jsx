import { useState } from "react";
import OurProducts from "../Data/ourproduct";

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = OurProducts.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">Our Products</h2>

            <div className="flex justify-center mb-10">
                <input
                    type="text"
                    placeholder="Search product name..."
                    className="border border-gray-300 rounded-full px-5 py-3 w-full max-w-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={index}
                            className="bg-gray-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
                        >
                            <img
                                src={product.image}
                                alt={product.productName}
                                className="w-80% h-52 object-cover"
                            />
                            <div className="p-6 w-full">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {product.productName}
                                </h3>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">OEM:</span> {product.oem}
                                </p>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Part No.:</span> {product.partNumber}
                                </p>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Specification:</span> {product.specification}
                                </p>
                                <p className="text-gray-600 mb-4">
                                    <span className="font-semibold">Company:</span> {product.company}
                                </p>
                                <button className="w-80% bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h3 className="text-center text-lg text-gray-500">No products found.</h3>
            )}
        </div>
    );

};

export default Products;
