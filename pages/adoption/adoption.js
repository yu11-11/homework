const app = getApp();

Page({
  data: {
    pets: []
  },

  onLoad() {
    this.setData({
      pets: app.globalData.adoptionList || []
    });
  }
});
