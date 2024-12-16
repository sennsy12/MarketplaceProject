export const FashionFilters = {
    price: {
        title: 'Price Range',
        type: 'range',
        min: 0,
        max: 50000,
        step: 100
    },
    category: {
        title: 'Category',
        type: 'multiSelect',
        options: ['Clothing', 'Shoes', 'Accessories', 'Bags', 'Jewelry', 'Watches']
    },
    size: {
        title: 'Size',
        type: 'multiSelect',
        options: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    },
    brand: {
        title: 'Brand',
        type: 'multiSelect',
        options: [
            'Nike', 'Adidas', 'Zara', 'H&M', 'Gucci', 
            'Louis Vuitton', 'Prada', 'Hermès', 'Chanel'
        ]
    },
    condition: {
        title: 'Condition',
        type: 'multiSelect',
        options: [
            'New with tags',
            'New without tags',
            'Very good',
            'Good',
            'Fair'
        ]
    },
    style: {
        title: 'Style',
        type: 'multiSelect',
        options: [
            'Casual',
            'Formal',
            'Sports',
            'Vintage',
            'Designer',
            'Streetwear'
        ]
    },
    color: {
        title: 'Color',
        type: 'multiSelect',
        options: [
            'Black',
            'White',
            'Red',
            'Blue',
            'Green',
            'Yellow',
            'Pink',
            'Purple',
            'Brown',
            'Grey',
            'Multicolor'
        ]
    },
    material: {
        title: 'Material',
        type: 'multiSelect',
        options: [
            'Cotton',
            'Leather',
            'Silk',
            'Wool',
            'Polyester',
            'Denim',
            'Linen'
        ]
    },
    gender: {
        title: 'Gender',
        type: 'multiSelect',
        options: ['Men', 'Women', 'Unisex', 'Kids']
    },
    season: {
        title: 'Season',
        type: 'multiSelect',
        options: ['Spring', 'Summer', 'Fall', 'Winter', 'All Seasons']
    }
};
