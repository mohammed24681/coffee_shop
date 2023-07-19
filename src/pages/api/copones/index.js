import copones from "@/data/copones";

function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(copones);
  }
}

export default handler;
