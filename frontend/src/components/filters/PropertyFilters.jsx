export const PropertyFilters = {
    price: {
        title: 'Price Range',
        type: 'range',
        min: 0,
        max: 20000000,
        step: 100000
    },
    type: {
        title: 'Property Type',
        type: 'multiSelect',
        options: ['Apartment', 'House', 'Townhouse', 'Cabin', 'Plot', 'Commercial']
    },
    size: {
        title: 'Size (m²)',
        type: 'range',
        min: 0,
        max: 1000,
        step: 5
    },
    bedrooms: {
        title: 'Bedrooms',
        type: 'multiSelect',
        options: ['Studio', '1', '2', '3', '4', '5+']
    },
    bathrooms: {
        title: 'Bathrooms',
        type: 'select',
        options: ['1', '2', '3', '4+']
    },
    features: {
        title: 'Features',
        type: 'checkboxGroup',
        options: [
            'Parking',
            'Elevator',
            'Balcony',
            'Garden',
            'Sea View',
            'Mountain View',
            'Furnished'
        ]
    },
    yearBuilt: {
        title: 'Year Built',
        type: 'rangeYears',
        min: 1900,
        max: new Date().getFullYear()
    },
    energyRating: {
        title: 'Energy Rating',
        type: 'select',
        options: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    ownership: {
        title: 'Ownership Type',
        type: 'select',
        options: ['Freehold', 'Leasehold', 'Shared']
    }
};
