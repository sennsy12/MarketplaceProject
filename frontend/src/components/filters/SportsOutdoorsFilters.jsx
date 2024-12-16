export const SportsOutdoorsFilters = {
    price: {
        title: 'Price Range',
        type: 'range',
        min: 0,
        max: 50000,
        step: 500
    },
    category: {
        title: 'Category',
        type: 'multiSelect',
        options: [
            'Fitness Equipment',
            'Camping & Hiking',
            'Cycling',
            'Winter Sports',
            'Water Sports',
            'Team Sports',
            'Golf',
            'Fishing'
        ]
    },
    condition: {
        title: 'Condition',
        type: 'multiSelect',
        options: ['New', 'Like New', 'Good', 'Fair', 'For parts']
    },
    brand: {
        title: 'Brand',
        type: 'multiSelect',
        options: [
            'Nike',
            'Adidas',
            'Under Armour',
            'The North Face',
            'Columbia',
            'Salomon',
            'Wilson',
            'Callaway'
        ]
    },
    size: {
        title: 'Size',
        type: 'multiSelect',
        options: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size']
    },
    gender: {
        title: 'Gender',
        type: 'multiSelect',
        options: ['Men', 'Women', 'Unisex', 'Kids']
    }
};
