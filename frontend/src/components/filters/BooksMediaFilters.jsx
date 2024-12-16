export const BooksMediaFilters = {
    price: {
        title: 'Price Range',
        type: 'range',
        min: 0,
        max: 5000,
        step: 50
    },
    category: {
        title: 'Category',
        type: 'multiSelect',
        options: [
            'Books',
            'Textbooks',
            'Comics',
            'Magazines',
            'Movies & TV',
            'Music',
            'Video Games',
            'Board Games'
        ]
    },
    condition: {
        title: 'Condition',
        type: 'multiSelect',
        options: ['New', 'Like New', 'Very Good', 'Good', 'Acceptable']
    },
    format: {
        title: 'Format',
        type: 'multiSelect',
        options: [
            'Hardcover',
            'Paperback',
            'Digital',
            'DVD',
            'Blu-ray',
            'Vinyl',
            'CD',
            'Digital Download'
        ]
    },
    genre: {
        title: 'Genre',
        type: 'multiSelect',
        options: [
            'Fiction',
            'Non-Fiction',
            'Science Fiction',
            'Mystery',
            'Romance',
            'Biography',
            'Academic',
            'Children'
        ]
    },
    language: {
        title: 'Language',
        type: 'multiSelect',
        options: [
            'Norwegian',
            'English',
            'Swedish',
            'Danish',
            'German',
            'French',
            'Spanish'
        ]
    }
};
