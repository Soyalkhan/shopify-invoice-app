const PDFDocument = require('pdfkit');

const generateInvoice = (req, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
  
  doc.text('Invoice for Order: ' + req.params.orderId);
  // Add more details such as items, total, etc.
  doc.end();

  doc.pipe(res);
};

module.exports = { generateInvoice };
