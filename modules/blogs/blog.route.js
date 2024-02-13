const router = require("express").Router();

router.get("/", (req, res) => {
  const { limit, page, search } = req.query; //use for search,sorting and filter
  //database opeartion
  res.json({ msg: "Hello from get blogs" });
});
//ADD NEW USER
router.post("/", (req, res) => {
  console.log(req.body);
  //database opeartion
  res.json({ msg: "Hello from post blog" });
});
//UPDATE SINGLE USER FOR MORE THAN TWO FIELDS
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  //database opeartion
  res.json({ msg: `Hello from put blogs${id}` });
});
//UPDATE SINGLE USER FOR ONE FIELD
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  //database opeartion
  res.json({ msg: `Hello from patch blogs${id}` });
});
//DELETE SINGLE USER
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  //database opeartion
  res.json({ msg: `Hello from delete blogs${id}` });
});

module.exports = router;
