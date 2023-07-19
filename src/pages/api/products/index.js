import products from "@/data/products"

function handler(req, res) {
  res.status(200).json(products)
}

export default handler;