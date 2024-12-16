export const ElectronicsFilters = {
    price: {
        title: 'Price Range',
        type: 'range',
        min: 0,
        max: 50000,
        step: 500
    },
    condition: {
        title: 'Condition',
        type: 'multiSelect',
        options: ['New', 'Used - Like New', 'Used - Good', 'Used - Fair', 'For Parts']
    },
    brand: {
        title: 'Brand',
        type: 'multiSelect',
        options: ['Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'Asus']
    },
    category: {
        title: 'Category',
        type: 'multiSelect',
        options: ['Phones', 'Laptops', 'TVs', 'Audio', 'Gaming', 'Cameras', 'Accessories']
    },
    warranty: {
        title: 'Warranty Status',
        type: 'select',
        options: ['Under Warranty', 'No Warranty', 'Extended Warranty']
    },
    storage: {
        title: 'Storage Capacity',
        type: 'multiSelect',
        options: ['16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB', '2TB+']
    },
    color: {
        title: 'Color',
        type: 'multiSelect',
        options: ['Black', 'White', 'Silver', 'Gold', 'Blue', 'Red', 'Other']
    }
};
