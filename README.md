# 毛绒岛

一个原生微信小程序公益展示项目，包含地图首页、流浪动物上报页、待领养动物列表页；同时提供浏览器可访问的静态展示页，方便部署到 GitHub Pages。

## 功能

- 首页地图展示救助站、领养点、流浪动物位置
- 上报页支持选择动物类型、上传图片、填写描述
- 领养列表页卡片式展示待领养动物信息

## 本地预览

1. 打开微信开发者工具
2. 选择“导入项目”
3. 选择当前项目目录
4. 使用测试号或你自己的小程序 `AppID`
5. 点击编译即可预览

项目目录：

```text
/Users/wz/Documents/New project
```

## 浏览器预览

仓库根目录提供了静态网页展示版：

- `index.html`
- `web.css`
- `web.js`

本地直接双击 `index.html` 或使用任意静态服务器打开，即可在浏览器查看项目界面展示。

## 上传到 GitHub

如果你已经在 GitHub 创建了仓库，执行：

```bash
cd "/Users/wz/Documents/New project"
git add .
git commit -m "init 毛绒岛 miniapp"
git remote add origin https://github.com/<your-name>/<your-repo>.git
git push -u origin main
```

如果已经设置过 `origin`，改用：

```bash
git remote set-url origin https://github.com/<your-name>/<your-repo>.git
git push -u origin main
```

## 开启 GitHub Pages

代码推送完成后：

1. 打开 GitHub 仓库页面
2. 进入 `Settings`
3. 进入 `Pages`
4. 在 `Build and deployment` 中选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. 保存后等待几十秒

随后 GitHub 会生成一个公开链接，通常形如：

```text
https://<你的用户名>.github.io/<你的仓库名>/
```

这个链接打开的就是浏览器版项目展示页。

## 注意

- `project.private.config.json` 是微信开发者工具的本地私有配置，已加入 `.gitignore`
- GitHub Pages 展示的是网页版本，不是微信小程序运行环境
- 如果老师需要看真实小程序交互，仍然要用微信开发者工具或真机预览
