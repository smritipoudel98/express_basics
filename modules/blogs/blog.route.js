const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    const { limit, page, search } = req.query; //use for search,sorting and filter
    //database opeartion
    states;
    res.json({ msg: "Hello from get blogs" });
  } catch (e) {
    next(e);
  }
});

//ADD NEW USER
router.post("/", (req, res, next) => {
  try {
    console.log(req.body);
    //database opeartion
    res.json({ msg: "Hello from post blog" });
  } catch (e) {
    next(e);
  }
});
//UPDATE SINGLE USER FOR MORE THAN TWO FIELDS
router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log({ id, data });
    //database opeartion
    res.json({ msg: `Hello from put blogs${id}` });
  } catch (e) {
    next(e);
  }
});
//UPDATE SINGLE USER FOR ONE FIELD
router.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log({ id, data });
    //database opeartion
    res.json({ msg: `Hello from patch blogs${id}` });
  } catch (e) {
    next(e);
  }
});
//DELETE SINGLE USER
router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log({ id, data });
    //database opeartion
    res.json({ msg: `Hello from delete blogs${id}` });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
