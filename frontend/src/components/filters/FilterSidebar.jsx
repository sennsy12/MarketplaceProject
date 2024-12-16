import { useState, useEffect } from 'react';
import { ElectronicsFilters } from './ElectronicsFilters';
import { VehiclesFilters } from './VehiclesFilters';
import { PropertyFilters } from './PropertyFilters';
import { FashionFilters } from './FashionsFilters';
import { HomeGardenFilters } from './HomeGardenFilters';
import { SportsOutdoorsFilters } from './SportsOutdoorsFilters';
import { BooksMediaFilters } from './BooksMediaFilters';
import { ToysGamesFilters } from './ToysGamesFilters';
import { ServicesFilters } from './ServicesFilters';
import { ArtCollectiblesFilters } from './ArtCollectiblesFilters';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const FilterSidebar = ({ categoryId, onFilterChange }) => {
    const [activeFilters, setActiveFilters] = useState({});
    const [expandedSections, setExpandedSections] = useState({});
    const [selectedValues, setSelectedValues] = useState({});

    const getCategoryFilters = (categoryId) => {
        switch(categoryId) {
            case '1': return ElectronicsFilters;
            case '2': return VehiclesFilters;
            case '3': return PropertyFilters;
            case '4': return FashionFilters;
            case '5': return HomeGardenFilters;
            case '6': return SportsOutdoorsFilters;
            case '7': return BooksMediaFilters;
            case '8': return ToysGamesFilters;
            case '9': return ServicesFilters;
            case '10': return ArtCollectiblesFilters;
            default: return {};
        }
    };

    const filters = getCategoryFilters(categoryId);

    const toggleSection = (key) => {
        setExpandedSections(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleRangeChange = (key, filter, value) => {
        setSelectedValues(prev => ({
            ...prev,
            [key]: value
        }));
        handleFilterChange(key, value);
    };

    const renderRangeFilter = (key, filter) => (
        <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
                <span>{filter.min}</span>
                <span className="font-medium text-teal-600">
                    {selectedValues[key] || filter.min}
                </span>
                <span>{filter.max}</span>
            </div>
            <input
                type="range"
                min={filter.min}
                max={filter.max}
                step={filter.step}
                value={selectedValues[key] || filter.min}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                onChange={(e) => handleRangeChange(key, filter, e.target.value)}
            />
        </div>
    );

    const renderMultiSelect = (key, filter) => (
        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
            {filter.options.map(option => (
                <label key={option} className="flex items-center gap-2 p-1 hover:bg-gray-50 rounded">
                    <input
                        type="checkbox"
                        checked={activeFilters[key]?.includes(option)}
                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        onChange={(e) => {
                            const currentValues = activeFilters[key] || [];
                            const newValues = e.target.checked 
                                ? [...currentValues, option]
                                : currentValues.filter(val => val !== option);
                            handleFilterChange(key, newValues);
                        }}
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                </label>
            ))}
        </div>
    );

    const handleFilterChange = (filterType, value) => {
        const newFilters = {
            ...activeFilters,
            [filterType]: value
        };
        setActiveFilters(newFilters);
        onFilterChange(newFilters);
    };

    const getActiveFilterCount = () => {
        return Object.values(activeFilters).flat().length;
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                {getActiveFilterCount() > 0 && (
                    <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {getActiveFilterCount()} active
                    </span>
                )}
            </div>

            <div className="space-y-4">
                {Object.entries(filters).map(([key, filter]) => (
                    <div key={key} className="border-b border-gray-100 pb-4">
                        <button
                            className="w-full flex justify-between items-center py-2"
                            onClick={() => toggleSection(key)}
                        >
                            <h3 className="font-semibold text-gray-700">{filter.title}</h3>
                            {expandedSections[key] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        {expandedSections[key] && (
                            <div className="mt-3">
                                {filter.type === 'range' && renderRangeFilter(key, filter)}
                                {filter.type === 'multiSelect' && renderMultiSelect(key, filter)}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {getActiveFilterCount() > 0 && (
                <button
                    onClick={() => {
                        setActiveFilters({});
                        setSelectedValues({});
                        onFilterChange({});
                    }}
                    className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <X size={16} />
                    Clear All Filters
                </button>
            )}
        </div>
    );
};

export default FilterSidebar;
