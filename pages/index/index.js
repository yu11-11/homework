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
    latitude: 39.9042,
    longitude: 116.4074,
    scale: 13,
    markers: [],
    stats: [],
    hasLocation: false,
    nearestShelter: null
  },

  onShow() {
    this.loadMarkers();
    this.updateUserLocation();
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

  updateUserLocation() {
    wx.getLocation({
      type: 'gcj02',
      isHighAccuracy: true,
      success: (res) => {
        const nearestShelter = this.getNearestShelter(res.latitude, res.longitude);
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          hasLocation: true,
          nearestShelter
        });
      },
      fail: () => {
        this.setData({
          hasLocation: false,
          nearestShelter: null
        });

        wx.showModal({
          title: '定位未开启',
          content: '请允许获取位置，用于首页实时定位和附近救助点展示。',
          confirmText: '去开启',
          success: (modalRes) => {
            if (modalRes.confirm) {
              wx.openSetting();
            }
          }
        });
      }
    });
  },

  getNearestShelter(latitude, longitude) {
    const shelterPoints = (app.globalData.shelterPoints || []).filter((item) => item.type === 'shelter');

    if (!shelterPoints.length) {
      return null;
    }

    let nearest = null;

    shelterPoints.forEach((item) => {
      const distance = this.getDistance(latitude, longitude, item.latitude, item.longitude);

      if (!nearest || distance < nearest.distance) {
        nearest = {
          name: item.name,
          distance,
          distanceText: distance < 1 ? `${Math.round(distance * 1000)} 米` : `${distance.toFixed(1)} 公里`
        };
      }
    });

    return nearest;
  },

  getDistance(lat1, lon1, lat2, lon2) {
    const toRad = (value) => (value * Math.PI) / 180;
    const earthRadius = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
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
  },

  retryLocation() {
    this.updateUserLocation();
  }
});
