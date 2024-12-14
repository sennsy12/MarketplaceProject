const SearchDropdown = ({ isVisible }) => {
    if (!isVisible) return null;
  
    return (
      <div className="absolute top-full left-0 right-0 bg-white mt-1 rounded-lg shadow-lg border p-4 z-50">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Recent Searches</h3>
            <div className="space-y-2">
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md">iPhone 13</button>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md">MacBook Pro</button>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md">Gaming PC</button>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Popular Searches</h3>
            <div className="space-y-2">
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md">PlayStation 5</button>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md">Nintendo Switch</button>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md">Electric Scooter</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchDropdown;
  