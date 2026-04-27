const app = getApp();

const TYPE_META = {
  shelter: {
    label: '救助站',
    iconPath: '/assets/markers/shelter.png'
  },
  adoption: {
    label: '领养点',
    iconPath: '/assets/markers/adoption.png'
  },
  stray: {
    label: '流浪动物',
    iconPath: '/assets/markers/stray.png'
  }
};

Page({
  data: {
    latitude: 31.2304,
    longitude: 121.4737,
    scale: 13,
    markers: [],
    stats: []
  },

  onShow() {
    this.loadMarkers();
  },

  loadMarkers() {
    const basePoints = app.globalData.shelterPoints || [];
    const reportedPoints = wx.getStorageSync('reportedAnimals') || [];
    const markers = [...basePoints, ...reportedPoints].map((item) => ({
      id: item.id,
      latitude: item.latitude,
      longitude: item.longitude,
      width: 26,
      height: 32,
      iconPath: TYPE_META[item.type].iconPath,
      callout: {
        content: item.name,
        color: '#243127',
        fontSize: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#d7decb',
        bgColor: '#fffdf8',
        padding: 8,
        display: 'BYCLICK'
      }
    }));

    const stats = [
      { label: '救助站', value: basePoints.filter((item) => item.type === 'shelter').length },
      { label: '领养点', value: basePoints.filter((item) => item.type === 'adoption').length },
      {
        label: '待关注',
        value: [...basePoints, ...reportedPoints].filter((item) => item.type === 'stray').length
      }
    ];

    this.setData({ markers, stats });
  },

  goReport() {
    wx.navigateTo({
      url: '/pages/report/report'
    });
  },

  goAdoption() {
    wx.navigateTo({
      url: '/pages/adoption/adoption'
    });
  }
});
