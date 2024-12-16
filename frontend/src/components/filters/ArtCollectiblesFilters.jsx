export const ArtCollectiblesFilters = {
    price: {
        title: 'Price Range',
        type: 'range',
        min: 0,
        max: 1000000,
        step: 1000
    },
    category: {
        title: 'Category',
        type: 'multiSelect',
        options: [
            'Paintings',
            'Sculptures',
            'Photography',
            'Prints',
            'Antiques',
            'Collectible Cards',
            'Coins & Stamps',
            'Vintage Items'
        ]
    },
    period: {
        title: 'Time Period',
        type: 'multiSelect',
        options: [
            'Pre-1900',
            '1900-1950',
            '1951-1980',
            '1981-2000',
            '2001-Present'
        ]
    },
    style: {
        title: 'Style',
        type: 'multiSelect',
        options: [
            'Contemporary',
            'Modern',
            'Abstract',
            'Traditional',
            'Pop Art',
            'Folk Art'
        ]
    },
    medium: {
        title: 'Medium',
        type: 'multiSelect',
        options: [
            'Oil',
            'Acrylic',
            'Watercolor',
            'Digital',
            'Mixed Media',
            'Photography'
        ]
    },
    authentication: {
        title: 'Authentication',
        type: 'boolean',
        options: ['Certificate Available', 'No Certificate']
    },
    condition: {
        title: 'Condition',
        type: 'multiSelect',
        options: [
            'Mint',
            'Near Mint',
            'Excellent',
            'Good',
            'Fair'
        ]
    }
};
