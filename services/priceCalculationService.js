const Pricing = require('../database/models/pricingModel');

// Function to calculate delivery price
async function calculateDeliveryPrice({ zone, organization_id, total_distance, item_type }) {
  try {
    // Fetch pricing details from the database
    const pricing = await Pricing.findOne({
      where: {
        organization_id,
        zone
      }
    });

    // Perform pricing calculations
    let totalPrice;
    if (total_distance <= pricing.base_distance_in_km) {
      totalPrice = pricing.fix_price;
    } else {
      const additionalDistance = total_distance - pricing.base_distance_in_km;
      const perKmPrice = item_type === 'perishable' ? pricing.km_price : pricing.km_price / 1.5;
      totalPrice = pricing.fix_price + additionalDistance * perKmPrice;
    }

    return totalPrice;
  } catch (error) {
    throw new Error('Error calculating delivery price: ' + error.message);
  }
}

module.exports = { calculateDeliveryPrice };
