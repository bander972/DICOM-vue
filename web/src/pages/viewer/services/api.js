import Service from "./service";
export default {
  /**
   * 接口定义
   */
  /**
   * Get
   */
  getUser(params) {
    return Service.Get("url", params);
  },
  /**
   * Put
   */
  putUser(data) {
    return Service.putUser("url", data);
  },
  /**
   * Post
   */
  postUser(id, data) {
    return Service.Post(`url/${id}`, data);
  },
  /**
   * Delete
   */
  deleteUser(id) {
    return Service.Delete(`url/${id}`);
  }
};
