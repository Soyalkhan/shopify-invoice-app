const shopify = require('../config/shopify');

const getOrders = async (req, res) => {
  try {
    const orders = await shopify.order.list({ limit: 50 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders from Shopify', error });
  }
};

module.exports = { getOrders };
