export const HomeGardenFilters = {
    price: {
        title: 'Price Range',
        type: 'range',
        min: 0,
        max: 100000,
        step: 500
    },
    category: {
        title: 'Category',
        type: 'multiSelect',
        options: [
            'Furniture',
            'Garden & Outdoor',
            'Home Decor',
            'Kitchen & Dining',
            'Bathroom',
            'Lighting',
            'Storage & Organization',
            'Tools & Equipment'
        ]
    },
    condition: {
        title: 'Condition',
        type: 'multiSelect',
        options: ['New', 'Like New', 'Good', 'Fair', 'For parts']
    },
    material: {
        title: 'Material',
        type: 'multiSelect',
        options: [
            'Wood',
            'Metal',
            'Glass',
            'Plastic',
            'Fabric',
            'Leather',
            'Ceramic',
            'Stone'
        ]
    },
    style: {
        title: 'Style',
        type: 'multiSelect',
        options: [
            'Modern',
            'Scandinavian',
            'Traditional',
            'Industrial',
            'Rustic',
            'Contemporary',
            'Minimalist'
        ]
    },
    brand: {
        title: 'Brand',
        type: 'multiSelect',
        options: [
            'IKEA',
            'Bolia',
            'BoConcept',
            'Jysk',
            'Skeidar',
            'Other'
        ]
    }
};
