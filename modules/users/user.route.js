const router = require("express").Router();
const { validate } = require("./user.validate");
//GET ALL THE USER
router.get("/", (req, res) => {
  const { limit, page, search } = req.query; //use for search,sorting and filter
  //database opeartion
  res.json({ msg: "Hello from get user" });
});
//ADD NEW USER
router.post("/", validate, (req, res, next) => {
  console.log(req.body);
  //database opeartion
  res.json({ msg: "Hello from post user" });
});
//UPDATE SINGLE USER FOR MORE THAN TWO FIELDS
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  //database opeartion
  res.json({ msg: `Hello from put user${id}` });
});
//UPDATE SINGLE USER FOR ONE FIELD
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  //database opeartion
  res.json({ msg: `Hello from patch user${id}` });
});
//DELETE SINGLE USER
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  //database opeartion
  res.json({ msg: `Hello from delete user${id}` });
});

module.exports = router;
