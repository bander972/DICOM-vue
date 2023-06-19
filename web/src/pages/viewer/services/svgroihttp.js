import Service from "./service";
export default {
  /**
   * 接口定义
   */
  /**
   * Get
   * 查询svg类型的roi信息
   */
  getSvgRoiInfo(params) {
    return Service.Get("/svg/getroiinfo", params);
  },
  /**
   * 添加svg类型的roi数据
   */
  addSvgRoiInfo(data) {
    return Service.Put("/svg/addroiinfo", data);
  },
  /**
   * 更新svg类型roi数据
   */
  updateSvgRoiInfo(data) {
    // return Service.Post(`url/${id}`, data);
    return Service.Post("/svg/updateroiinfo", data);
  },
  /**
   * 删除svg类型的roi数据
   */
  deleteSvgRoiInfo(params) {
    return Service.Delete("/svg/deleteroiinfo", params);
  }
};
