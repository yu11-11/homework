App({
  globalData: {
    shelterPoints: [
      {
        id: 1,
        name: '向阳救助站',
        latitude: 31.2304,
        longitude: 121.4737,
        type: 'shelter'
      },
      {
        id: 2,
        name: '海棠领养点',
        latitude: 31.2243,
        longitude: 121.4768,
        type: 'adoption'
      },
      {
        id: 3,
        name: '待救助流浪犬',
        latitude: 31.228,
        longitude: 121.468,
        type: 'stray'
      },
      {
        id: 4,
        name: '待救助流浪猫',
        latitude: 31.2338,
        longitude: 121.4812,
        type: 'stray'
      }
    ],
    adoptionList: [
      {
        id: 101,
        name: '奶糖',
        age: '1 岁',
        intro: '亲人活泼，已完成基础体检，适合有耐心的新手家庭。',
        image: '/assets/pets/cat.png',
        type: '猫咪'
      },
      {
        id: 102,
        name: '阿黄',
        age: '2 岁',
        intro: '性格稳定，会牵引，适合喜欢户外活动的家庭。',
        image: '/assets/pets/dog.png',
        type: '狗狗'
      },
      {
        id: 103,
        name: '小灰',
        age: '8 个月',
        intro: '适应力强，喜欢陪伴，正在等待稳定温暖的领养环境。',
        image: '/assets/pets/cat-alt.png',
        type: '猫咪'
      }
    ]
  }
});
