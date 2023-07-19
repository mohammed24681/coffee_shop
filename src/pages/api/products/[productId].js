import products from "@/data/products";

function handler(req, res) {
  const product = products.find((prod) => prod.id == req.query.productId);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(400).json("product not found");
  }
}

export default handler;
