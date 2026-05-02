const shelterPoints = [
  {
    name: "朝阳爱心救助站",
    latitude: 39.9219,
    longitude: 116.4436,
    type: "shelter"
  },
  {
    name: "海淀领养服务点",
    latitude: 39.9854,
    longitude: 116.3055,
    type: "adoption"
  },
  {
    name: "待救助流浪犬",
    latitude: 39.9087,
    longitude: 116.3975,
    type: "stray"
  },
  {
    name: "待救助流浪猫",
    latitude: 39.9389,
    longitude: 116.4274,
    type: "stray"
  }
];

const adoptionList = [
  {
    name: "奶糖",
    age: "1 岁",
    type: "猫咪",
    intro: "亲人活泼，已完成基础体检，适合有耐心的新手家庭。",
    image: "./assets/pets/cat.png"
  },
  {
    name: "阿黄",
    age: "2 岁",
    type: "狗狗",
    intro: "性格稳定，会牵引，适合喜欢户外活动的家庭。",
    image: "./assets/pets/dog.png"
  },
  {
    name: "小灰",
    age: "8 个月",
    type: "猫咪",
    intro: "适应力强，喜欢陪伴，正在等待稳定温暖的领养环境。",
    image: "./assets/pets/cat-alt.png"
  }
];

const container = document.querySelector("#adoption-list");

if (container) {
  container.innerHTML = adoptionList
    .map(
      (pet) => `
        <article class="pet-card">
          <img class="pet-image" src="${pet.image}" alt="${pet.name}" />
          <div class="pet-body">
            <div class="pet-head">
              <h3>${pet.name}</h3>
              <span class="pet-tag">${pet.type}</span>
            </div>
            <p class="pet-meta">${pet.age}</p>
            <p class="pet-copy">${pet.intro}</p>
          </div>
        </article>
      `
    )
    .join("");
}
