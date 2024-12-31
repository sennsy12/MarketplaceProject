const Listing = require('../models/Listing');
const { catchAsync } = require('../utils/catchAsync');

exports.createListing = catchAsync(async (req, res) => {
  const listingData = {
    ...req.body,
    seller_id: req.user.id,
    images: req.files ? req.files.map(file => file.path) : []
  };

  const listing = await Listing.create(listingData);

  res.status(201).json({
    status: 'success',
    data: listing
  });
});

exports.getListings = catchAsync(async (req, res) => {
  const listings = await Listing.findAll();

  res.status(200).json({
    status: 'success',
    results: listings.length,
    data: listings
  });
});

exports.getListing = catchAsync(async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return res.status(404).json({
      status: 'fail',
      message: 'Listing not found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: listing
  });
});

exports.updateListing = catchAsync(async (req, res) => {
  const listing = await Listing.update(req.params.id, req.user.id, req.body);

  if (!listing) {
    return res.status(404).json({
      status: 'fail',
      message: 'Listing not found or unauthorized'
    });
  }

  res.status(200).json({
    status: 'success',
    data: listing
  });
});

exports.deleteListing = catchAsync(async (req, res) => {
  const result = await Listing.delete(req.params.id, req.user.id);

  if (!result) {
    return res.status(404).json({
      status: 'fail',
      message: 'Listing not found or unauthorized'
    });
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
}); 