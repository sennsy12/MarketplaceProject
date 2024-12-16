export const ToysGamesFilters = {
    price: {
        title: 'Price Range',
        type: 'range',
        min: 0,
        max: 10000,
        step: 100
    },
    category: {
        title: 'Category',
        type: 'multiSelect',
        options: [
            'Action Figures',
            'Building Toys',
            'Dolls',
            'Educational Toys',
            'Board Games',
            'Outdoor Toys',
            'Electronic Toys',
            'Arts & Crafts'
        ]
    },
    ageGroup: {
        title: 'Age Group',
        type: 'multiSelect',
        options: [
            '0-2 years',
            '3-5 years',
            '6-8 years',
            '9-11 years',
            '12+ years',
            'Adult'
        ]
    },
    brand: {
        title: 'Brand',
        type: 'multiSelect',
        options: [
            'LEGO',
            'Playmobil',
            'Hasbro',
            'Mattel',
            'Fisher-Price',
            'Nintendo',
            'Barbie'
        ]
    },
    condition: {
        title: 'Condition',
        type: 'multiSelect',
        options: [
            'New',
            'Like New',
            'Good',
            'Fair',
            'For parts'
        ]
    }
};
