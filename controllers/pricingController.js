const { calculateDeliveryPrice } = require('../services/priceCalculationService');

async function calculatePriceController(req, res) {
  const { zone, organization_id, total_distance, item_type } = req.body;

  try {
    const totalPrice = await calculateDeliveryPrice({ zone, organization_id, total_distance, item_type });
    return res.status(200).json({ total_price: totalPrice });
  } catch (error) {
    console.error('Error calculating delivery price:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { calculatePriceController };
