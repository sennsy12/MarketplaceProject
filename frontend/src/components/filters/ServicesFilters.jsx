export const ServicesFilters = {
    category: {
        title: 'Category',
        type: 'multiSelect',
        options: [
            'Home Services',
            'Professional Services',
            'Educational',
            'Health & Wellness',
            'Events & Entertainment',
            'Business Services',
            'Pet Services',
            'Transportation'
        ]
    },
    priceRange: {
        title: 'Price Range (per hour)',
        type: 'range',
        min: 0,
        max: 2000,
        step: 50
    },
    availability: {
        title: 'Availability',
        type: 'multiSelect',
        options: [
            'Weekdays',
            'Weekends',
            'Evenings',
            'Flexible'
        ]
    },
    experience: {
        title: 'Experience Level',
        type: 'multiSelect',
        options: [
            'Entry Level',
            '1-3 years',
            '3-5 years',
            '5+ years',
            'Expert'
        ]
    },
    location: {
        title: 'Service Area',
        type: 'multiSelect',
        options: [
            'On-site',
            'Remote',
            'Home visits',
            'Studio/Office'
        ]
    },
    certification: {
        title: 'Certification',
        type: 'boolean',
        options: ['Certified', 'Not Required']
    }
};
