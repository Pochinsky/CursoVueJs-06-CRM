import api from "../lib/axios";

export default {
  getCustomer(id) {
    return api.get("/customers/" + id);
  },
  getCustomers() {
    return api.get("/customers");
  },
  addCustomer(data) {
    return api.post("/customers", data);
  },
  updateCustomer(id, data) {
    return api.patch("/customers/" + id, data);
  },
  updateState(id, data) {
    return api.patch("/customers/" + id, data);
  },
  deleteCustomer(id) {
    return api.delete("/customers/" + id);
  },
};
