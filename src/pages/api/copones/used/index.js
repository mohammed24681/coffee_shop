import copones from "@/data/copones";

function handler(req, res) {
  if (req.method === "POST") {
    const coponeId = req.body;
    const coponeIndex = copones.findIndex((copone) => {
      return copone.id === coponeId;
    });
    if (
      copones[coponeIndex].usageTimes > 0 &&
      copones[coponeIndex].usageTimes != 1
    ) {
      copones[coponeIndex].usageTimes--;
    } else {
      copones.splice(coponeIndex, 1);
    }
    res.status(201).json("done");
  }
}

export default handler;
