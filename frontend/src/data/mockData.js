
export const categories = [
    { id: 1, name: 'Electronics', count: '25,340', slug: 'electronics' },
    { id: 2, name: 'Vehicles', count: '12,320', slug: 'vehicles' },
    { id: 3, name: 'Property', count: '8,430', slug: 'property' },
    { id: 4, name: 'Fashion', count: '31,440', slug: 'fashion' },
    { id: 5, name: 'Home & Garden', count: '17,320', slug: 'home-garden' },
    { id: 6, name: 'Sports & Outdoors', count: '9,876', slug: 'sports-outdoors' },
    { id: 7, name: 'Books & Media', count: '14,567', slug: 'books-media' },
    { id: 8, name: 'Toys & Games', count: '6,789', slug: 'toys-games' },
    { id: 9, name: 'Services', count: '5,432', slug: 'services' },
    { id: 10, name: 'Art & Collectibles', count: '3,210', slug: 'art-collectibles' }
];

export const subcategories = {
    1: [
        { id: 'phones', name: 'Phones & Tablets', count: '12,340' },
        { id: 'computers', name: 'Computers & Laptops', count: '8,560' },
        { id: 'audio', name: 'Audio & Headphones', count: '4,440' },
        { id: 'cameras', name: 'Cameras & Photography', count: '3,210' },
        { id: 'gaming', name: 'Gaming & Consoles', count: '5,670' },
        { id: 'accessories', name: 'Accessories', count: '6,123' },
        { id: 'tv', name: 'TV & Home Theater', count: '2,876' },
        { id: 'wearables', name: 'Wearable Tech', count: '1,789' },
        { id: 'printers', name: 'Printers & Scanners', count: '987' },
        { id: 'components', name: 'Computer Components', count: '456' }
    ],
    2: [
        { id: 'cars', name: 'Cars', count: '5,670' },
        { id: 'motorcycles', name: 'Motorcycles', count: '2,340' },
        { id: 'parts', name: 'Auto Parts', count: '4,310' },
        { id: 'trucks', name: 'Trucks & Commercial', count: '1,220' },
        { id: 'boats', name: 'Boats & Marine', count: '890' },
        { id: 'rvs', name: 'RVs & Campers', count: '765' },
        { id: 'atvs', name: 'ATVs & Snowmobiles', count: '543' },
        { id: 'trailers', name: 'Trailers', count: '321' },
        { id: 'buses', name: 'Buses & Vans', count: '210' },
        { id: 'accessories', name: 'Vehicle Accessories', count: '123' }
    ],
    3: [
        { id: 'apartments', name: 'Apartments', count: '3,450' },
        { id: 'houses', name: 'Houses', count: '2,340' },
        { id: 'land', name: 'Land', count: '1,230' },
        { id: 'commercial', name: 'Commercial Property', count: '890' },
        { id: 'vacation', name: 'Vacation Rentals', count: '670' },
        { id: 'garages', name: 'Garages & Parking', count: '567' },
         { id: 'farms', name: 'Farms & Agriculture', count: '456' },
        { id: 'offices', name: 'Office Space', count: '345' },
         { id: 'shared', name: 'Shared Spaces', count: '234' },
        { id: 'storage', name: 'Storage Units', count: '123' }
    ],
    4: [
        { id: 'clothing', name: 'Clothing', count: '12,340' },
        { id: 'shoes', name: 'Shoes', count: '8,970' },
        { id: 'accessories', name: 'Accessories', count: '5,670' },
        { id: 'watches', name: 'Watches & Jewelry', count: '3,450' },
        { id: 'bags', name: 'Bags & Luggage', count: '2,340' },
        { id: 'men', name: "Men's Clothing", count: '2,100'},
        { id: 'women', name: "Women's Clothing", count: '1,980'},
        { id: 'kids', name: "Kids Clothing", count: '1,750'},
        { id: 'vintage', name: "Vintage Fashion", count: '1,670'},
        { id: 'uniforms', name: 'Work Uniforms', count: '1,530' }
    ],
    5: [
        { id: 'furniture', name: 'Furniture', count: '6,780' },
        { id: 'garden', name: 'Garden & Outdoor', count: '4,560' },
        { id: 'appliances', name: 'Appliances', count: '3,450' },
        { id: 'tools', name: 'Tools & Equipment', count: '2,340' },
        { id: 'decor', name: 'Home Decor', count: '5,670' },
        { id: 'kitchen', name: 'Kitchenware', count: '4,321' },
        { id: 'bedding', name: 'Bedding & Linens', count: '3,210' },
        { id: 'lighting', name: 'Lighting', count: '2,100' },
        { id: 'storage', name: 'Storage & Organization', count: '1,987' },
        { id: 'cleaning', name: 'Cleaning Supplies', count: '1,765' }
    ],
    6: [
        { id: 'fitness', name: 'Fitness Equipment', count: '3,210'},
        { id: 'camping', name: 'Camping & Hiking', count: '2,100'},
        { id: 'cycling', name: 'Cycling', count: '1,234'},
        { id: 'water', name: 'Water Sports', count: '1,000'},
        { id: 'fishing', name: 'Fishing Gear', count: '987'},
        { id: 'winter', name: 'Winter Sports', count: '876'},
        { id: 'team', name: 'Team Sports', count: '765'},
         { id: 'golf', name: 'Golf Equipment', count: '654'},
        { id: 'outdoor', name: 'Outdoor Clothing', count: '543' },
       { id: 'accessories', name: 'Sports Accessories', count: '432'}
    ],
   7: [
        {id: 'books', name: 'Books', count: '4,321'},
        { id: 'magazines', name: 'Magazines', count: '3,210'},
        { id: 'movies', name: 'Movies & TV Shows', count: '2,100'},
        { id: 'music', name: 'Music & Vinyl', count: '1,987'},
        { id: 'videoGames', name: 'Video Games', count: '1,765'},
         { id: 'comics', name: 'Comics & Graphic Novels', count: '1,654'},
        { id: 'textbooks', name: 'Textbooks', count: '1,432'},
        { id: 'audiobooks', name: 'Audiobooks', count: '1,210'},
        { id: 'instruments', name: 'Musical Instruments', count: '1,100' },
        {id: 'supplies', name: 'Art & Craft Supplies', count: '1000'}
    ],
    8: [
       {id: 'toys', name: 'Toys', count: '2,876'},
       {id: 'board', name: 'Board Games', count: '2,543'},
        { id: 'puzzles', name: 'Puzzles', count: '1,987'},
        { id: 'building', name: 'Building Blocks', count: '1,654'},
        { id: 'dolls', name: 'Dolls & Plush', count: '1,432'},
        { id: 'educational', name: 'Educational Toys', count: '1,321'},
        { id: 'outdoor', name: 'Outdoor Toys', count: '1,200' },
        { id: 'collectible', name: 'Collectible Toys', count: '1,100'},
        {id: 'baby', name: 'Baby Toys', count: '987'},
        {id: 'crafts', name: 'Craft Sets', count: '876'}
    ],
    9: [
       {id: 'lessons', name: 'Lessons & Tutoring', count: '1,765'},
        { id: 'cleaning', name: 'Cleaning Services', count: '1,654'},
        { id: 'home', name: 'Home Repair', count: '1,432'},
        { id: 'design', name: 'Design Services', count: '1,321'},
        {id: 'events', name: 'Event Planning', count: '1,200' },
        {id: 'photography', name: 'Photography', count: '1,100'},
        {id: 'it', name: 'IT Services', count: '1000'},
        {id: 'legal', name: 'Legal Services', count: '876'},
       {id: 'pet', name: 'Pet Services', count: '765'},
        {id: 'other', name: 'Other Services', count: '654'}
    ],
    10: [
        {id: 'paintings', name: 'Paintings', count: '1,234'},
        {id: 'sculptures', name: 'Sculptures', count: '1,100'},
        {id: 'prints', name: 'Art Prints', count: '987'},
        {id: 'antiques', name: 'Antiques', count: '876'},
        {id: 'collectibles', name: 'Collectibles', count: '765'},
        {id: 'crafts', name: 'Handcrafted Arts', count: '654'},
        {id: 'ceramics', name: 'Ceramics', count: '543'},
        {id: 'textiles', name: 'Textile Art', count: '432'},
         {id: 'glass', name: 'Glass Art', count: '321'},
         {id: 'jewellery', name: 'Collectible Jewellery', count: '210'}
     ]
};


export const listings = [
    // Electronics
    { id: 1, title: "iPhone 13 Pro Max", description: "Brand new, still in box. Space gray, 256GB storage.", price: "8999", currency: "kr", location: "Oslo", category: 1, subcategory: "phones", condition: "New", image: "/images/iphone13.jpg", images: ["/images/iphone13-1.jpg", "/images/iphone13-2.jpg", "/images/iphone13-3.jpg"], seller: { id: 1, name: "John Doe", rating: 4.8, listings: 23 }, created: "2024-01-15T10:30:00", views: 245, saved: false },
    { id: 2, title: "MacBook Pro M1", description: "Late 2021 model, 16GB RAM, 512GB SSD. Perfect condition.", price: "12999", currency: "kr", location: "Bergen", category: 1, subcategory: "computers", condition: "Used - Like New", image: "/images/macbook.jpg", images: ["/images/macbook-1.jpg", "/images/macbook-2.jpg", "/images/macbook-3.jpg"], seller: { id: 2, name: "Jane Smith", rating: 4.9, listings: 15 }, created: "2024-01-14T15:45:00", views: 189, saved: true },
    { id: 3, title: "Sony WH-1000XM5 Headphones", description: "Noise cancelling headphones. Excellent audio quality.", price: "2799", currency: "kr", location: "Stavanger", category: 1, subcategory: "audio", condition: "Used - Good", image: "/images/headphones.jpg", images: ["/images/headphones-1.jpg", "/images/headphones-2.jpg"], seller: { id: 4, name: "Sara Lee", rating: 4.5, listings: 12 }, created: "2024-01-13T08:22:00", views: 95, saved: false },
      { id: 4, title: "Canon EOS 5D Mark IV", description: "Professional DSLR camera. Great for photography enthusiasts.", price: "21500", currency: "kr", location: "Drammen", category: 1, subcategory: "cameras", condition: "Used - Excellent", image: "/images/canon.jpg", images: ["/images/canon-1.jpg", "/images/canon-2.jpg"], seller: { id: 5, name: "Adam Cole", rating: 4.7, listings: 10 }, created: "2024-01-12T20:10:00", views: 200, saved: true },
    { id: 5, title: "PlayStation 5", description: "Brand new, includes one controller.", price: "5999", currency: "kr", location: "Tromsø", category: 1, subcategory: "gaming", condition: "New", image: "/images/ps5.jpg", images: ["/images/ps5-1.jpg", "/images/ps5-2.jpg"], seller: { id: 6, name: "Eva Green", rating: 4.9, listings: 18 }, created: "2024-01-11T14:35:00", views: 322, saved: true },
      { id: 6, title: "Samsung Galaxy S22", description: "Excellent condition. Comes with charger and case.", price: "5499", currency: "kr", location: "Ålesund", category: 1, subcategory: "phones", condition: "Used - Good", image: "/images/samsung.jpg", images: ["/images/samsung-1.jpg", "/images/samsung-2.jpg"], seller: {id: 7, name: "Peter Pan", rating: 4.6, listings: 16}, created: "2024-01-10T17:20:00", views: 155, saved: false},
    { id: 7, title: "HP Envy Laptop", description: "16GB RAM, 1TB SSD. Perfect for business or personal use.", price: "9999", currency: "kr", location: "Lillehammer", category: 1, subcategory: "computers", condition: "Used - Like New", image: "/images/hp.jpg", images: ["/images/hp-1.jpg", "/images/hp-2.jpg"], seller: {id: 8, name: "Wendy Darling", rating: 4.7, listings: 22}, created: "2024-01-09T12:15:00", views: 123, saved: true},
    { id: 8, title: "Bose QuietComfort Earbuds", description: "Wireless earbuds with noise cancellation. Comfortable fit.", price: "1999", currency: "kr", location: "Kristiansand", category: 1, subcategory: "audio", condition: "Used - Good", image: "/images/bose.jpg", images: ["/images/bose-1.jpg", "/images/bose-2.jpg"], seller: {id: 9, name: "Harry Potter", rating: 4.5, listings: 11}, created: "2024-01-08T09:30:00", views: 87, saved: false},
    { id: 9, title: "GoPro Hero 10", description: "Action camera. Shoots 5K video. Ideal for travel and adventure.", price: "3499", currency: "kr", location: "Bodø", category: 1, subcategory: "cameras", condition: "Used - Like New", image: "/images/gopro.jpg", images: ["/images/gopro-1.jpg", "/images/gopro-2.jpg"], seller: {id: 10, name: "Hermione Granger", rating: 4.8, listings: 17}, created: "2024-01-07T16:45:00", views: 215, saved: true},
     {id: 10, title: "Nintendo Switch OLED", description: "Brand new, neon blue and red joycons. Never used.", price: "4199", currency: "kr", location: "Haugesund", category: 1, subcategory: "gaming", condition: "New", image: "/images/nintendo.jpg", images: ["/images/nintendo-1.jpg", "/images/nintendo-2.jpg"], seller: {id: 11, name: "Ron Weasley", rating: 4.6, listings: 13}, created: "2024-01-06T13:20:00", views: 288, saved: false},
       {id: 11, title: "Apple Watch Series 7", description: "GPS + Cellular, midnight aluminum case. Like new condition.", price: "3299", currency: "kr", location: "Molde", category: 1, subcategory: "wearables", condition: "Used - Like New", image: "/images/applewatch.jpg", images: ["/images/applewatch-1.jpg", "/images/applewatch-2.jpg"], seller: {id: 12, name: "Luna Lovegood", rating: 4.7, listings: 20}, created: "2024-01-05T14:50:00", views: 199, saved: true},
      {id: 12, title: "Samsung 55 inch Smart TV", description: "4K UHD, HDR, Smart features. Great for home cinema.", price: "6999", currency: "kr", location: "Skien", category: 1, subcategory: "tv", condition: "Used - Good", image: "/images/samsungtv.jpg", images: ["/images/samsungtv-1.jpg", "/images/samsungtv-2.jpg"], seller: {id: 13, name: "Draco Malfoy", rating: 4.4, listings: 15}, created: "2024-01-04T11:11:00", views: 120, saved: false},
       {id: 13, title: "Logitech MX Master 3 Mouse", description: "Wireless mouse. Ergonomic design, multiple connectivity.", price: "999", currency: "kr", location: "Sandefjord", category: 1, subcategory: "accessories", condition: "Used - Like New", image: "/images/logitechmouse.jpg", images: ["/images/logitechmouse-1.jpg", "/images/logitechmouse-2.jpg"], seller: {id: 14, name: "Neville Longbottom", rating: 4.9, listings: 22}, created: "2024-01-03T12:22:00", views: 134, saved: true},
     {id: 14, title: "Epson EcoTank Printer", description: "Wireless, refillable ink, high-quality printing.", price: "2499", currency: "kr", location: "Kongsberg", category: 1, subcategory: "printers", condition: "Used - Good", image: "/images/epsonprinter.jpg", images: ["/images/epsonprinter-1.jpg", "/images/epsonprinter-2.jpg"], seller: {id: 15, name: "Ginny Weasley", rating: 4.7, listings: 18}, created: "2024-01-02T08:44:00", views: 111, saved: false},
        {id: 15, title: "Nvidia RTX 3080 Graphics Card", description: "High-performance graphics card. Perfect for gaming PC build.", price: "8999", currency: "kr", location: "Halden", category: 1, subcategory: "components", condition: "Used - Like New", image: "/images/rtx.jpg", images: ["/images/rtx-1.jpg", "/images/rtx-2.jpg"], seller: {id: 16, name: "Fred Weasley", rating: 4.8, listings: 24}, created: "2024-01-01T15:33:00", views: 234, saved: true},

        // Vehicles
        { id: 16, title: "Tesla Model 3", description: "2022 Long Range, White, Full Self-Driving capability", price: "379000", currency: "kr", location: "Trondheim", category: 2, subcategory: "cars", condition: "Used - Excellent", image: "/images/tesla.jpg", images: ["/images/tesla-1.jpg", "/images/tesla-2.jpg", "/images/tesla-3.jpg"], seller: { id: 3, name: "Erik Nielsen", rating: 5.0, listings: 7 }, created: "2024-01-13T09:15:00", views: 432, saved: false },
        { id: 17, title: "BMW R1250GS", description: "Adventure motorcycle, 2021 model, low mileage.", price: "199000", currency: "kr", location: "Bergen", category: 2, subcategory: "motorcycles", condition: "Used - Excellent", image: "/images/bmwmotorcycle.jpg", images: ["/images/bmwmotorcycle-1.jpg", "/images/bmwmotorcycle-2.jpg"], seller: { id: 17, name: "Maria Garcia", rating: 4.9, listings: 9 }, created: "2024-01-12T11:40:00", views: 212, saved: true },
        { id: 18, title: "Used Michelin Tires", description: "Set of four Michelin tires, 205/55 R16, good condition.", price: "2900", currency: "kr", location: "Oslo", category: 2, subcategory: "parts", condition: "Used - Good", image: "/images/michelin.jpg", images: ["/images/michelin-1.jpg", "/images/michelin-2.jpg"], seller: { id: 18, name: "Bjorn Svensson", rating: 4.6, listings: 10 }, created: "2024-01-11T18:55:00", views: 78, saved: false },
          { id: 19, title: "Ford Transit Van", description: "2019 cargo van, well-maintained, ideal for deliveries.", price: "215000", currency: "kr", location: "Stavanger", category: 2, subcategory: "trucks", condition: "Used - Good", image: "/images/fordvan.jpg", images: ["/images/fordvan-1.jpg", "/images/fordvan-2.jpg"], seller: { id: 19, name: "Lisa Johansen", rating: 4.7, listings: 6 }, created: "2024-01-10T10:20:00", views: 188, saved: true },
        {id: 20, title: "Yamaha Waverunner", description: "2022 jet ski, low hours, perfect for summer fun.", price: "159000", currency: "kr", location: "Tromsø", category: 2, subcategory: "boats", condition: "Used - Excellent", image: "/images/waverunner.jpg", images: ["/images/waverunner-1.jpg", "/images/waverunner-2.jpg"], seller: {id: 20, name: "Anna Karlsen", rating: 4.8, listings: 8}, created: "2024-01-09T14:45:00", views: 322, saved: false},
           {id: 21, title: "Toyota RAV4", description: "2020 SUV, hybrid engine, great fuel efficiency.", price: "299000", currency: "kr", location: "Ålesund", category: 2, subcategory: "cars", condition: "Used - Good", image: "/images/toyotarav4.jpg", images: ["/images/toyotarav4-1.jpg", "/images/toyotarav4-2.jpg"], seller: {id: 21, name: "Ole Hansen", rating: 4.6, listings: 13}, created: "2024-01-08T16:30:00", views: 155, saved: true},
        {id: 22, title: "Harley Davidson Street Bob", description: "2021 cruiser, custom paint job, low mileage.", price: "179000", currency: "kr", location: "Lillehammer", category: 2, subcategory: "motorcycles", condition: "Used - Excellent", image: "/images/harley.jpg", images: ["/images/harley-1.jpg", "/images/harley-2.jpg"], seller: {id: 22, name: "Ida Solberg", rating: 4.7, listings: 11}, created: "2024-01-07T12:10:00", views: 123, saved: false},
        {id: 23, title: "Used Brake Pads", description: "Set of front brake pads, fits most VW models.", price: "800", currency: "kr", location: "Kristiansand", category: 2, subcategory: "parts", condition: "Used - Good", image: "/images/brakepads.jpg", images: ["/images/brakepads-1.jpg", "/images/brakepads-2.jpg"], seller: {id: 23, name: "Knut Pedersen", rating: 4.5, listings: 16}, created: "2024-01-06T09:25:00", views: 87, saved: true},
         {id: 24, title: "Mercedes Sprinter", description: "2022 cargo van, perfect for commercial use or conversion.", price: "329000", currency: "kr", location: "Bodø", category: 2, subcategory: "trucks", condition: "Used - Like New", image: "/images/mercedesvan.jpg", images: ["/images/mercedesvan-1.jpg", "/images/mercedesvan-2.jpg"], seller: {id: 24, name: "Sofie Madsen", rating: 4.8, listings: 12}, created: "2024-01-05T17:40:00", views: 215, saved: false},
         {id: 25, title: "Sea Ray Bowrider", description: "2023 boat, perfect for family fun on the water.", price: "499000", currency: "kr", location: "Haugesund", category: 2, subcategory: "boats", condition: "Used - Excellent", image: "/images/searay.jpg", images: ["/images/searay-1.jpg", "/images/searay-2.jpg"], seller: {id: 25, name: "Lars Olsen", rating: 4.9, listings: 10}, created: "2024-01-04T14:15:00", views: 288, saved: true},
          {id: 26, title: "Winnebago RV", description: "2018 RV, sleeps four, comes with all amenities.", price: "699000", currency: "kr", location: "Molde", category: 2, subcategory: "rvs", condition: "Used - Good", image: "/images/winnebago.jpg", images: ["/images/winnebago-1.jpg", "/images/winnebago-2.jpg"], seller: {id: 26, name: "Ingrid Eide", rating: 4.7, listings: 9}, created: "2024-01-03T10:30:00", views: 199, saved: false},
           {id: 27, title: "Can-Am Outlander", description: "2021 ATV, four-wheel drive, excellent for off-roading.", price: "129000", currency: "kr", location: "Skien", category: 2, subcategory: "atvs", condition: "Used - Like New", image: "/images/canam.jpg", images: ["/images/canam-1.jpg", "/images/canam-2.jpg"], seller: {id: 27, name: "Emil Hagen", rating: 4.4, listings: 7}, created: "2024-01-02T13:45:00", views: 120, saved: true},
           {id: 28, title: "Used Utility Trailer", description: "Single axle utility trailer, perfect for hauling.", price: "25000", currency: "kr", location: "Sandefjord", category: 2, subcategory: "trailers", condition: "Used - Good", image: "/images/trailer.jpg", images: ["/images/trailer-1.jpg", "/images/trailer-2.jpg"], seller: {id: 28, name: "Maren Nilsen", rating: 4.9, listings: 11}, created: "2024-01-01T14:30:00", views: 134, saved: false},
             {id: 29, title: "Mercedes City Bus", description: "2017 city bus, great for transportation business.", price: "899000", currency: "kr", location: "Kongsberg", category: 2, subcategory: "buses", condition: "Used - Good", image: "/images/citybus.jpg", images: ["/images/citybus-1.jpg", "/images/citybus-2.jpg"], seller: {id: 29, name: "Jonas Olsen", rating: 4.7, listings: 8}, created: "2024-01-01T16:20:00", views: 111, saved: true},
               {id: 30, title: "Roof Rack for SUV", description: "Universal roof rack, fits most SUVs, easy to install.", price: "1500", currency: "kr", location: "Halden", category: 2, subcategory: "accessories", condition: "Used - Good", image: "/images/roofrack.jpg", images: ["/images/roofrack-1.jpg", "/images/roofrack-2.jpg"], seller: {id: 30, name: "Karen Hagen", rating: 4.8, listings: 9}, created: "2024-01-01T17:30:00", views: 234, saved: false},
    
        // Property
        { id: 31, title: "Cozy 2 Bedroom Apartment", description: "Newly renovated apartment in downtown area.", price: "1500000", currency: "kr", location: "Oslo", category: 3, subcategory: "apartments", condition: "New", image: "/images/apartment.jpg", images: ["/images/apartment-1.jpg", "/images/apartment-2.jpg"], seller: { id: 31, name: "Anna Hansen", rating: 4.8, listings: 11 }, created: "2024-01-15T11:00:00", views: 345, saved: false },
        { id: 32, title: "Modern Family House", description: "Spacious house with garden and garage.", price: "3500000", currency: "kr", location: "Bergen", category: 3, subcategory: "houses", condition: "Used - Like New", image: "/images/house.jpg", images: ["/images/house-1.jpg", "/images/house-2.jpg"], seller: { id: 32, name: "David Chen", rating: 4.9, listings: 14 }, created: "2024-01-14T16:20:00", views: 276, saved: true },
        { id: 33, title: "Large Plot of Land", description: "Ideal for building your dream home, 5 acres.", price: "800000", currency: "kr", location: "Stavanger", category: 3, subcategory: "land", condition: "New", image: "/images/land.jpg", images: ["/images/land-1.jpg", "/images/land-2.jpg"], seller: { id: 33, name: "Elin Svensson", rating: 4.7, listings: 8 }, created: "2024-01-13T09:45:00", views: 198, saved: false },
        { id: 34, title: "Office Space for Rent", description: "Modern office in business district.", price: "18000", currency: "kr", location: "Drammen", category: 3, subcategory: "commercial", condition: "New", image: "/images/office.jpg", images: ["/images/office-1.jpg", "/images/office-2.jpg"], seller: { id: 34, name: "Faisal Khan", rating: 4.5, listings: 12 }, created: "2024-01-12T18:30:00", views: 156, saved: true },
        { id: 35, title: "Beachfront Cabin Rental", description: "Cozy cabin perfect for vacation getaway.", price: "2000", currency: "kr", location: "Tromsø", category: 3, subcategory: "vacation", condition: "Used - Good", image: "/images/cabin.jpg", images: ["/images/cabin-1.jpg", "/images/cabin-2.jpg"], seller: { id: 35, name: "Gerd Larsen", rating: 4.6, listings: 9 }, created: "2024-01-11T12:15:00", views: 300, saved: false },
            { id: 36, title: "Parking Garage Spot", description: "Indoor parking spot, great location.", price: "1000", currency: "kr", location: "Ålesund", category: 3, subcategory: "garages", condition: "New", image: "/images/parking.jpg", images: ["/images/parking-1.jpg", "/images/parking-2.jpg"], seller: { id: 36, name: "Hans Olsen", rating: 4.8, listings: 10}, created: "2024-01-10T10:10:00", views: 120, saved: true },
        {id: 37, title: "Large Agricultural Farm", description: "Productive farmland for sale, ready to use.", price: "4200000", currency: "kr", location: "Lillehammer", category: 3, subcategory: "farms", condition: "New", image: "/images/farm.jpg", images: ["/images/farm-1.jpg", "/images/farm-2.jpg"], seller: {id: 37, name: "Ingrid Johansen", rating: 4.7, listings: 7}, created: "2024-01-09T14:45:00", views: 150, saved: false},
        {id: 38, title: "Office Suite Rental", description: "Spacious office suite with multiple rooms, ready for your team.", price: "25000", currency: "kr", location: "Kristiansand", category: 3, subcategory: "offices", condition: "New", image: "/images/officesuite.jpg", images: ["/images/officesuite-1.jpg", "/images/officesuite-2.jpg"], seller: {id: 38, name: "Jens Nilsen", rating: 4.6, listings: 11}, created: "2024-01-08T17:30:00", views: 180, saved: true},
            {id: 39, title: "Co-Working Space", description: "Affordable co-working space for rent, great community", price: "1500", currency: "kr", location: "Bodø", category: 3, subcategory: "shared", condition: "New", image: "/images/cowork.jpg", images: ["/images/cowork-1.jpg", "/images/cowork-2.jpg"], seller: {id: 39, name: "Kari Paulsen", rating: 4.5, listings: 13}, created: "2024-01-07T09:00:00", views: 130, saved: false},
       { id: 40, title: "Secure Storage Unit", description: "Private storage unit for rent, various sizes available.", price: "500", currency: "kr", location: "Haugesund", category: 3, subcategory: "storage", condition: "New", image: "/images/storage.jpg", images: ["/images/storage-1.jpg", "/images/storage-2.jpg"], seller: { id: 40, name: "Lars Bakken", rating: 4.9, listings: 15 }, created: "2024-01-06T13:00:00", views: 220, saved: true},
    
       //Fashion
        {id: 41, title: "Designer Leather Jacket", description: "Genuine leather, stylish men's jacket", price: "3999", currency: "kr", location: "Oslo", category: 4, subcategory: "clothing", condition: "Used - Like New", image: "/images/leatherjacket.jpg", images: ["/images/leatherjacket-1.jpg", "/images/leatherjacket-2.jpg"], seller: {id: 41, name: "Maria S.", rating: 4.7, listings: 10}, created: "2024-01-15T14:20:00", views: 200, saved: false},
        {id: 42, title: "Nike Air Max Sneakers", description: "Comfortable and stylish running shoes, size 42.", price: "1299", currency: "kr", location: "Bergen", category: 4, subcategory: "shoes", condition: "Used - Good", image: "/images/nikesneakers.jpg", images: ["/images/nikesneakers-1.jpg", "/images/nikesneakers-2.jpg"], seller: {id: 42, name: "Nina R.", rating: 4.8, listings: 12}, created: "2024-01-14T10:30:00", views: 180, saved: true},
       {id: 43, title: "Elegant Silk Scarf", description: "Pure silk, beautiful floral pattern.", price: "599", currency: "kr", location: "Stavanger", category: 4, subcategory: "accessories", condition: "New", image: "/images/silkscarf.jpg", images: ["/images/silkscarf-1.jpg", "/images/silkscarf-2.jpg"], seller: {id: 43, name: "Oliver T.", rating: 4.9, listings: 14}, created: "2024-01-13T18:40:00", views: 150, saved: false},
        {id: 44, title: "Rolex Submariner Watch", description: "Luxury men's watch, excellent condition", price: "89000", currency: "kr", location: "Drammen", category: 4, subcategory: "watches", condition: "Used - Like New", image: "/images/rolex.jpg", images: ["/images/rolex-1.jpg", "/images/rolex-2.jpg"], seller: {id: 44, name: "Peder H.", rating: 4.6, listings: 11}, created: "2024-01-12T12:00:00", views: 190, saved: true},
        {id: 45, title: "Designer Handbag", description: "Genuine leather, spacious for everyday use.", price: "2999", currency: "kr", location: "Tromsø", category: 4, subcategory: "bags", condition: "Used - Excellent", image: "/images/handbag.jpg", images: ["/images/handbag-1.jpg", "/images/handbag-2.jpg"], seller: {id: 45, name: "Quentin D.", rating: 4.7, listings: 9}, created: "2024-01-11T08:50:00", views: 160, saved: false},
             {id: 46, title: "Men's Casual Shirt", description: "Cotton, slim-fit, blue color.", price: "499", currency: "kr", location: "Ålesund", category: 4, subcategory: "men", condition: "New", image: "/images/menshirt.jpg", images: ["/images/menshirt-1.jpg", "/images/menshirt-2.jpg"], seller: {id: 46, name: "Ragna L.", rating: 4.8, listings: 8}, created: "2024-01-10T16:15:00", views: 140, saved: true},
           {id: 47, title: "Women's Summer Dress", description: "Lightweight fabric, perfect for summer.", price: "799", currency: "kr", location: "Lillehammer", category: 4, subcategory: "women", condition: "New", image: "/images/dress.jpg", images: ["/images/dress-1.jpg", "/images/dress-2.jpg"], seller: {id: 47, name: "Svein B.", rating: 4.9, listings: 11}, created: "2024-01-09T10:45:00", views: 170, saved: false},
       {id: 48, title: "Kids Winter Jacket", description: "Warm, padded winter jacket for kids size 128", price: "599", currency: "kr", location: "Kristiansand", category: 4, subcategory: "kids", condition: "Used - Good", image: "/images/kidsjacket.jpg", images: ["/images/kidsjacket-1.jpg", "/images/kidsjacket-2.jpg"], seller: {id: 48, name: "Torun G.", rating: 4.5, listings: 14}, created: "2024-01-08T08:30:00", views: 120, saved: true},
        {id: 49, title: "Vintage 1970s Jeans", description: "Original Levi's from the 1970s.", price: "1499", currency: "kr", location: "Bodø", category: 4, subcategory: "vintage", condition: "Used - Good", image: "/images/vintagejeans.jpg", images: ["/images/vintagejeans-1.jpg", "/images/vintagejeans-2.jpg"], seller: {id: 49, name: "Ulla V.", rating: 4.6, listings: 9}, created: "2024-01-07T19:00:00", views: 110, saved: false},
         { id: 50, title: "Chef's Uniform Set", description: "High-quality chef's uniform set.", price: "1199", currency: "kr", location: "Haugesund", category: 4, subcategory: "uniforms", condition: "New", image: "/images/chefuniform.jpg", images: ["/images/chefuniform-1.jpg", "/images/chefuniform-2.jpg"], seller: {id: 50, name: "Vebjørn T.", rating: 4.7, listings: 13}, created: "2024-01-06T13:45:00", views: 140, saved: true},
    
    
         //Home & Garden
        { id: 51, title: "Solid Wood Dining Table", description: "Extendable table, seats 6-8 people.", price: "4500", currency: "kr", location: "Oslo", category: 5, subcategory: "furniture", condition: "Used - Excellent", image: "/images/diningtable.jpg", images: ["/images/diningtable-1.jpg", "/images/diningtable-2.jpg"], seller: { id: 51, name: "Ane L.", rating: 4.8, listings: 11 }, created: "2024-01-15T09:30:00", views: 230, saved: false },
        { id: 52, title: "Outdoor Patio Set", description: "Includes sofa, two chairs, and coffee table.", price: "6700", currency: "kr", location: "Bergen", category: 5, subcategory: "garden", condition: "Used - Like New", image: "/images/patioset.jpg", images: ["/images/patioset-1.jpg", "/images/patioset-2.jpg"], seller: { id: 52, name: "Ben R.", rating: 4.9, listings: 14 }, created: "2024-01-14T11:45:00", views: 200, saved: true },
        { id: 53, title: "Large Refrigerator", description: "Modern fridge with freezer, energy efficient.", price: "7900", currency: "kr", location: "Stavanger", category: 5, subcategory: "appliances", condition: "Used - Good", image: "/images/refrigerator.jpg", images: ["/images/refrigerator-1.jpg", "/images/refrigerator-2.jpg"], seller: { id: 53, name: "Camilla S.", rating: 4.7, listings: 12 }, created: "2024-01-13T14:20:00", views: 170, saved: false },
        { id: 54, title: "Cordless Drill Set", description: "High-performance drill with multiple bits.", price: "1799", currency: "kr", location: "Drammen", category: 5, subcategory: "tools", condition: "New", image: "/images/drill.jpg", images: ["/images/drill-1.jpg", "/images/drill-2.jpg"], seller: { id: 54, name: "Daniel J.", rating: 4.5, listings: 10 }, created: "2024-01-12T16:10:00", views: 190, saved: true },
        { id: 55, title: "Set of Decorative Pillows", description: "Various colors and textures, set of 5.", price: "899", currency: "kr", location: "Tromsø", category: 5, subcategory: "decor", condition: "New", image: "/images/pillows.jpg", images: ["/images/pillows-1.jpg", "/images/pillows-2.jpg"], seller: { id: 55, name: "Eva T.", rating: 4.6, listings: 11 }, created: "2024-01-11T09:25:00", views: 210, saved: false },
        {id: 56, title: "Stainless Steel Cookware Set", description: "Complete set of high-quality pots and pans.", price: "2499", currency: "kr", location: "Ålesund", category: 5, subcategory: "kitchen", condition: "Used - Like New", image: "/images/cookware.jpg", images: ["/images/cookware-1.jpg", "/images/cookware-2.jpg"], seller: {id: 56, name: "Fredrik K.", rating: 4.8, listings: 13}, created: "2024-01-10T12:30:00", views: 180, saved: true},
            {id: 57, title: "Queen Size Bedding Set", description: "Comfortable duvet, sheets, and pillowcases.", price: "1599", currency: "kr", location: "Lillehammer", category: 5, subcategory: "bedding", condition: "New", image: "/images/bedding.jpg", images: ["/images/bedding-1.jpg", "/images/bedding-2.jpg"], seller: {id: 57, name: "Gunnar P.", rating: 4.9, listings: 10}, created: "2024-01-09T15:15:00", views: 220, saved: false},
         { id: 58, title: "Floor Lamp with Adjustable Head", description: "Modern style, LED bulb included", price: "799", currency: "kr", location: "Kristiansand", category: 5, subcategory: "lighting", condition: "Used - Excellent", image: "/images/floorlamp.jpg", images: ["/images/floorlamp-1.jpg", "/images/floorlamp-2.jpg"], seller: { id: 58, name: "Hanne B.", rating: 4.7, listings: 11}, created: "2024-01-08T08:00:00", views: 160, saved: true},
        {id: 59, title: "Plastic Storage Containers", description: "Various sizes, perfect for organization.", price: "499", currency: "kr", location: "Bodø", category: 5, subcategory: "storage", condition: "New", image: "/images/storagecontainers.jpg", images: ["/images/storagecontainers-1.jpg", "/images/storagecontainers-2.jpg"], seller: {id: 59, name: "Ida E.", rating: 4.6, listings: 12}, created: "2024-01-07T17:40:00", views: 155, saved: false},
       { id: 60, title: "Vacuum Cleaner with HEPA Filter", description: "Efficient vacuum for hard floors and carpets", price: "1499", currency: "kr", location: "Haugesund", category: 5, subcategory: "cleaning", condition: "Used - Good", image: "/images/vacuumcleaner.jpg", images: ["/images/vacuumcleaner-1.jpg", "/images/vacuumcleaner-2.jpg"], seller: { id: 60, name: "Jakob S.", rating: 4.8, listings: 15 }, created: "2024-01-06T11:55:00", views: 195, saved: true },
    
             //Sports & Outdoors
     { id: 61, title: "Treadmill Machine", description: "Electric treadmill, various programs available.", price: "5499", currency: "kr", location: "Oslo", category: 6, subcategory: "fitness", condition: "Used - Like New", image: "/images/treadmill.jpg", images: ["/images/treadmill-1.jpg", "/images/treadmill-2.jpg"], seller: { id: 61, name: "Kristoffer R.", rating: 4.7, listings: 10 }, created: "2024-01-15T10:10:00", views: 190, saved: false },
     { id: 62, title: "4 Person Tent", description: "Lightweight and durable tent for camping.", price: "2499", currency: "kr", location: "Bergen", category: 6, subcategory: "camping", condition: "New", image: "/images/tent.jpg", images: ["/images/tent-1.jpg", "/images/tent-2.jpg"], seller: { id: 62, name: "Liv M.", rating: 4.9, listings: 12 }, created: "2024-01-14T14:40:00", views: 210, saved: true },
       {id: 63, title: "Mountain Bike", description: "Aluminum frame, 27-speed, great condition.", price: "3999", currency: "kr", location: "Stavanger", category: 6, subcategory: "cycling", condition: "Used - Excellent", image: "/images/mountainbike.jpg", images: ["/images/mountainbike-1.jpg", "/images/mountainbike-2.jpg"], seller: {id: 63, name: "Marius L.", rating: 4.8, listings: 9}, created: "2024-01-13T17:00:00", views: 170, saved: false},
       {id: 64, title: "Kayak with Paddle", description: "Single-person kayak, stable and easy to handle.", price: "3299", currency: "kr", location: "Drammen", category: 6, subcategory: "water", condition: "Used - Good", image: "/images/kayak.jpg", images: ["/images/kayak-1.jpg", "/images/kayak-2.jpg"], seller: {id: 64, name: "Nadia J.", rating: 4.5, listings: 11}, created: "2024-01-12T09:30:00", views: 140, saved: true},
     { id: 65, title: "Fishing Rod and Reel Set", description: "Complete set for fishing enthusiasts", price: "1299", currency: "kr", location: "Tromsø", category: 6, subcategory: "fishing", condition: "New", image: "/images/fishingrod.jpg", images: ["/images/fishingrod-1.jpg", "/images/fishingrod-2.jpg"], seller: { id: 65, name: "Ola K.", rating: 4.6, listings: 8 }, created: "2024-01-11T13:20:00", views: 155, saved: false },
        {id: 66, title: "Skis and Bindings", description: "Great skis for beginner and intermediate skiers", price: "2499", currency: "kr", location: "Ålesund", category: 6, subcategory: "winter", condition: "Used - Excellent", image: "/images/skis.jpg", images: ["/images/skis-1.jpg", "/images/skis-2.jpg"], seller: {id: 66, name: "Petter V.", rating: 4.7, listings: 13}, created: "2024-01-10T15:00:00", views: 120, saved: true},
  
          //Books & Media
       { id: 67, title: "The Lord of the Rings Trilogy", description: "Classic fantasy novels in paperback.", price: "499", currency: "kr", location: "Oslo", category: 7, subcategory: "books", condition: "Used - Good", image: "/images/lotr.jpg", images: ["/images/lotr-1.jpg", "/images/lotr-2.jpg"], seller: { id: 67, name: "Ragnhild E.", rating: 4.8, listings: 10 }, created: "2024-01-15T12:20:00", views: 165, saved: false },
      { id: 68, title: "National Geographic Magazine Collection", description: "Assorted collection of National Geographic magazines.", price: "299", currency: "kr", location: "Bergen", category: 7, subcategory: "magazines", condition: "Used - Good", image: "/images/natgeo.jpg", images: ["/images/natgeo-1.jpg", "/images/natgeo-2.jpg"], seller: { id: 68, name: "Sindre T.", rating: 4.6, listings: 11 }, created: "2024-01-14T17:50:00", views: 140, saved: true },
     { id: 69, title: "Complete Series of Breaking Bad", description: "Blu-ray set of the entire Breaking Bad series.", price: "599", currency: "kr", location: "Stavanger", category: 7, subcategory: "movies", condition: "Used - Like New", image: "/images/breakingbad.jpg", images: ["/images/breakingbad-1.jpg", "/images/breakingbad-2.jpg"], seller: { id: 69, name: "Tina M.", rating: 4.9, listings: 8 }, created: "2024-01-13T11:30:00", views: 180, saved: false },
    { id: 70, title: "Pink Floyd - Dark Side of the Moon Vinyl", description: "Original pressing of the classic album", price: "899", currency: "kr", location: "Drammen", category: 7, subcategory: "music", condition: "Used - Excellent", image: "/images/pinkfloyd.jpg", images: ["/images/pinkfloyd-1.jpg", "/images/pinkfloyd-2.jpg"], seller: { id: 70, name: "Ulf A.", rating: 4.7, listings: 12 }, created: "2024-01-12T14:00:00", views: 175, saved: true },
         { id: 71, title: "The Last of Us Part II", description: "Playstation 4 Game", price: "299", currency: "kr", location: "Tromsø", category: 7, subcategory: "videoGames", condition: "Used - Good", image: "/images/lastofus.jpg", images: ["/images/lastofus-1.jpg", "/images/lastofus-2.jpg"], seller: { id: 71, name: "Vera B.", rating: 4.5, listings: 9 }, created: "2024-01-11T19:45:00", views: 135, saved: false },
         { id: 72, title: "Sandman Vol 1 Graphic Novel", description: "The classic graphic novel from Neil Gaiman.", price: "249", currency: "kr", location: "Ålesund", category: 7, subcategory: "comics", condition: "Used - Like New", image: "/images/sandman.jpg", images: ["/images/sandman-1.jpg", "/images/sandman-2.jpg"], seller: { id: 72, name: "William L.", rating: 4.8, listings: 7 }, created: "2024-01-10T13:22:00", views: 195, saved: true},
  
         //Toys & Games
         { id: 73, title: "Lego Star Wars Millennium Falcon", description: "Large Lego set, almost new, complete.", price: "3999", currency: "kr", location: "Oslo", category: 8, subcategory: "toys", condition: "Used - Like New", image: "/images/falcon.jpg", images: ["/images/falcon-1.jpg", "/images/falcon-2.jpg"], seller: { id: 73, name: "Anders F.", rating: 4.7, listings: 11 }, created: "2024-01-15T08:45:00", views: 185, saved: false },
         { id: 74, title: "Monopoly Board Game", description: "Classic Monopoly game, all pieces included.", price: "299", currency: "kr", location: "Bergen", category: 8, subcategory: "board", condition: "Used - Good", image: "/images/monopoly.jpg", images: ["/images/monopoly-1.jpg", "/images/monopoly-2.jpg"], seller: { id: 74, name: "Beate A.", rating: 4.8, listings: 9 }, created: "2024-01-14T09:55:00", views: 130, saved: true },
      {id: 75, title: "Jigsaw Puzzle 1000 Pieces", description: "Beautiful landscape jigsaw puzzle, new in box.", price: "149", currency: "kr", location: "Stavanger", category: 8, subcategory: "puzzles", condition: "New", image: "/images/puzzle.jpg", images: ["/images/puzzle-1.jpg", "/images/puzzle-2.jpg"], seller: {id: 75, name: "Camilla S.", rating: 4.6, listings: 7}, created: "2024-01-13T15:15:00", views: 125, saved: false},
      { id: 76, title: "Wooden Building Blocks Set", description: "Large set of various blocks for kids.", price: "499", currency: "kr", location: "Drammen", category: 8, subcategory: "building", condition: "Used - Like New", image: "/images/blocks.jpg", images: ["/images/blocks-1.jpg", "/images/blocks-2.jpg"], seller: { id: 76, name: "David N.", rating: 4.9, listings: 8 }, created: "2024-01-12T11:20:00", views: 145, saved: true },
      {id: 77, title: "Barbie Doll with Accessories", description: "Classic doll with clothing set, great gift", price: "299", currency: "kr", location: "Tromsø", category: 8, subcategory: "dolls", condition: "Used - Good", image: "/images/barbie.jpg", images: ["/images/barbie-1.jpg", "/images/barbie-2.jpg"], seller: {id: 77, name: "Ella M.", rating: 4.7, listings: 9}, created: "2024-01-11T16:30:00", views: 130, saved: false},
       {id: 78, title: "Educational Learning Set for toddlers", description: "Complete learning set to teach colours, and shapes", price: "499", currency: "kr", location: "Ålesund", category: 8, subcategory: "educational", condition: "New", image: "/images/learningset.jpg", images: ["/images/learningset-1.jpg", "/images/learningset-2.jpg"], seller: {id: 78, name: "Finn A.", rating: 4.8, listings: 13}, created: "2024-01-10T14:45:00", views: 110, saved: true},
  
      //Services
      { id: 79, title: "Math Tutoring Service", description: "Experienced tutor for high school students", price: "400", currency: "kr", location: "Oslo", category: 9, subcategory: "lessons", condition: "New", image: "/images/tutoring.jpg", images: ["/images/tutoring-1.jpg", "/images/tutoring-2.jpg"], seller: { id: 79, name: "Grete L.", rating: 4.8, listings: 10 }, created: "2024-01-15T11:15:00", views: 120, saved: false },
      { id: 80, title: "House Cleaning Service", description: "Reliable house cleaning for residential areas", price: "500", currency: "kr", location: "Bergen", category: 9, subcategory: "cleaning", condition: "New", image: "/images/cleaning.jpg", images: ["/images/cleaning-1.jpg", "/images/cleaning-2.jpg"], seller: { id: 80, name: "Håkon E.", rating: 4.7, listings: 11 }, created: "2024-01-14T13:30:00", views: 115, saved: true },
          { id: 81, title: "Plumbing Service", description: "Certified plumber ready to handle various jobs", price: "800", currency: "kr", location: "Stavanger", category: 9, subcategory: "home", condition: "New", image: "/images/plumber.jpg", images: ["/images/plumber-1.jpg", "/images/plumber-2.jpg"], seller: { id: 81, name: "Ingrid D.", rating: 4.9, listings: 9 }, created: "2024-01-13T18:15:00", views: 145, saved: false },
      {id: 82, title: "Web Design Service", description: "Modern web design to elevate your online brand", price: "1000", currency: "kr", location: "Drammen", category: 9, subcategory: "design", condition: "New", image: "/images/webdesign.jpg", images: ["/images/webdesign-1.jpg", "/images/webdesign-2.jpg"], seller: {id: 82, name: "Jan S.", rating: 4.5, listings: 8}, created: "2024-01-12T13:40:00", views: 150, saved: true},
      {id: 83, title: "Event Planning Service", description: "Experienced event planner for your next gathering.", price: "700", currency: "kr", location: "Tromsø", category: 9, subcategory: "events", condition: "New", image: "/images/eventplan.jpg", images: ["/images/eventplan-1.jpg", "/images/eventplan-2.jpg"], seller: {id: 83, name: "Kine K.", rating: 4.6, listings: 7}, created: "2024-01-11T11:00:00", views: 130, saved: false},
     { id: 84, title: "Pet Grooming Services", description: "Professional pet grooming", price: "300", currency: "kr", location: "Ålesund", category: 9, subcategory: "pet", condition: "New", image: "/images/petgroom.jpg", images: ["/images/petgroom-1.jpg", "/images/petgroom-2.jpg"], seller: { id: 84, name: "Lise M.", rating: 4.7, listings: 12}, created: "2024-01-10T16:45:00", views: 130, saved: true},
    //Art & Collectibles
   {id: 85, title: "Original Oil Painting", description: "Original oil painting landscape view", price: "3500", currency: "kr", location: "Oslo", category: 10, subcategory: "paintings", condition: "Used - Excellent", image: "/images/oilpainting.jpg", images: ["/images/oilpainting-1.jpg", "/images/oilpainting-2.jpg"], seller: { id: 85, name: "Mona K.", rating: 4.9, listings: 7 }, created: "2024-01-15T09:00:00", views: 135, saved: false },
    { id: 86, title: "Modern Sculpture Piece", description: "Abstract modern scuplture for home decoration", price: "5000", currency: "kr", location: "Bergen", category: 10, subcategory: "sculptures", condition: "Used - Like New", image: "/images/sculpture.jpg", images: ["/images/sculpture-1.jpg", "/images/sculpture-2.jpg"], seller: { id: 86, name: "Nina P.", rating: 4.8, listings: 10 }, created: "2024-01-14T11:50:00", views: 110, saved: true },
    { id: 87, title: "Signed Limited Edition Print", description: "Signed, framed art print by local artist", price: "1200", currency: "kr", location: "Stavanger", category: 10, subcategory: "prints", condition: "New", image: "/images/artprint.jpg", images: ["/images/artprint-1.jpg", "/images/artprint-2.jpg"], seller: { id: 87, name: "Ole M.", rating: 4.6, listings: 9 }, created: "2024-01-13T16:30:00", views: 140, saved: false },
      { id: 88, title: "Vintage Antique Clock", description: "Vintage standing clock in full working order", price: "6000", currency: "kr", location: "Drammen", category: 10, subcategory: "antiques", condition: "Used - Good", image: "/images/clock.jpg", images: ["/images/clock-1.jpg", "/images/clock-2.jpg"], seller: { id: 88, name: "Peter N.", rating: 4.7, listings: 8 }, created: "2024-01-12T17:45:00", views: 130, saved: true },
         { id: 89, title: "Old Rare Stamps Collectible", description: "Rare stamp collection - collectors item only", price: "1500", currency: "kr", location: "Tromsø", category: 10, subcategory: "collectibles", condition: "Used - Good", image: "/images/stamps.jpg", images: ["/images/stamps-1.jpg", "/images/stamps-2.jpg"], seller: { id: 89, name: "Rakel A.", rating: 4.5, listings: 11 }, created: "2024-01-11T14:35:00", views: 120, saved: false }
  ];