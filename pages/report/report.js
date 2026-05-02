Page({
  data: {
    animalTypes: ['狗狗', '猫咪', '其他'],
    typeIndex: 0,
    imageList: [],
    description: '',
    contact: ''
  },

  onTypeChange(event) {
    this.setData({
      typeIndex: Number(event.detail.value)
    });
  },

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const files = (res.tempFiles || []).map((item) => item.tempFilePath);
        this.setData({
          imageList: files
        });
      }
    });
  },

  updateDescription(event) {
    this.setData({
      description: event.detail.value
    });
  },

  updateContact(event) {
    this.setData({
      contact: event.detail.value
    });
  },

  submitReport() {
    const { animalTypes, typeIndex, imageList, description, contact } = this.data;

    if (!description.trim()) {
      wx.showToast({
        title: '请填写情况描述',
        icon: 'none'
      });
      return;
    }

    const reportList = wx.getStorageSync('reportedAnimals') || [];
    const item = {
      id: Date.now(),
      name: `${animalTypes[typeIndex]}上报点`,
      type: 'stray',
      latitude: 39.9042 + Math.random() * 0.01 - 0.005,
      longitude: 116.4074 + Math.random() * 0.01 - 0.005,
      animalType: animalTypes[typeIndex],
      description: description.trim(),
      contact: contact.trim(),
      image: imageList[0] || '',
      createdAt: Date.now()
    };

    wx.setStorageSync('reportedAnimals', [item, ...reportList]);

    wx.showToast({
      title: '上报成功',
      icon: 'success'
    });

    setTimeout(() => {
      wx.navigateBack();
    }, 500);
  }
});
