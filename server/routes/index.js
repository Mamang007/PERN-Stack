const { Router } = require("express");
const controller = require("../controllers/cutomersController");

const router = Router();

router.get("/", controller.getCustomers);
router.get("/:id", controller.getCustomerById);
router.post("/", controller.addCustomer);
router.delete("/:id", controller.deleteCustomer);
router.put("/:id", controller.updateCustomer);

module.exports = router;
