import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { searchOptions } from "../../../data/searchOptions";

export const KbarInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredActions, setFilteredActions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  const searchInputRef = useRef(null);
  const modalSearchInputRef = useRef(null);
  const modalRef = useRef(null);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = searchOptions.filter((action) =>
      action.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredActions(filtered);
  };

  const handleNavigate = (url) => {
    window.location.href = url;
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSearchTerm(""); // Optional: Clear search term when closing
    setIsSearchFocused(false); // Reset focus state when modal is closed
  };

  // Detect click outside the modal to close it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        !searchInputRef.current.contains(e.target)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Focus on the search input inside the modal when it opens
  useEffect(() => {
    if (isModalOpen) {
      modalSearchInputRef.current.focus();
      setIsSearchFocused(true); // Mark the search as focused in the modal
    }
  }, [isModalOpen]);

  return (
    <div className="relative w-full lg:w-1/3">
      <input
        ref={searchInputRef}
        type="text"
        value={searchTerm}
        onFocus={() => setIsModalOpen(true)}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-[150px] h-10 px-3 border rounded-lg border-slate-300 text-slate-600 focus:outline-none focus:ring focus:ring-blue-300"
      />
      
      {isModalOpen && (
        // Overlay background
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50" onClick={closeModal}>
          <div
            ref={modalRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] max-w-[600px] bg-white border rounded-lg shadow-lg max-h-64 overflow-auto z-10 p-4 transition-all"
          >
            <div className="relative">
              {/* New Search Input inside Modal */}
              <input
                ref={modalSearchInputRef}
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search inside Modal..."
                className="w-full h-10 px-3 mb-4 border rounded-lg border-slate-300 text-slate-600 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <ul>
                {searchTerm && filteredActions.length > 0 ? (
                  filteredActions.map((action) => (
                    <li
                      key={action.id}
                      onClick={() => handleNavigate(action.perform.toString())}
                      className="p-2 hover:bg-slate-200 cursor-pointer text-slate-600"
                    >
                      <div className="font-semibold">{action.name}</div>
                      <div className="text-sm text-slate-400">{action.subtitle}</div>
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-slate-400">No results found</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
