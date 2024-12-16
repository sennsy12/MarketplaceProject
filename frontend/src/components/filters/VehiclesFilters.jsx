export const VehiclesFilters = {
    price: {
        title: 'Price Range',
        type: 'range',
        min: 0,
        max: 5000000,
        step: 10000
    },
    make: {
        title: 'Make',
        type: 'multiSelect',
        options: ['Toyota', 'Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi', 'Volvo', 'Tesla']
    },
    model: {
        title: 'Model',
        type: 'dependent',
        dependsOn: 'make'
    },
    year: {
        title: 'Year',
        type: 'rangeYears',
        min: 1990,
        max: new Date().getFullYear()
    },
    mileage: {
        title: 'Mileage (km)',
        type: 'range',
        min: 0,
        max: 400000,
        step: 5000
    },
    fuelType: {
        title: 'Fuel Type',
        type: 'multiSelect',
        options: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid']
    },
    transmission: {
        title: 'Transmission',
        type: 'multiSelect',
        options: ['Automatic', 'Manual']
    },
    bodyType: {
        title: 'Body Type',
        type: 'multiSelect',
        options: ['Sedan', 'SUV', 'Hatchback', 'Station Wagon', 'Coupe', 'Convertible', 'Van']
    },
    color: {
        title: 'Color',
        type: 'multiSelect',
        options: ['Black', 'White', 'Silver', 'Blue', 'Red', 'Grey', 'Other']
    },
    features: {
        title: 'Features',
        type: 'checkboxGroup',
        options: [
            'Leather Seats',
            'Sunroof',
            'Navigation',
            'Parking Sensors',
            'Backup Camera',
            'Heated Seats',
            'Bluetooth'
        ]
    }
};
