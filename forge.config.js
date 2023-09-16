const path = require("path")

module.exports = {
  packagerConfig: {
    asar: true,
    icon: "assets/app_icon",
    extraResource: ["./assets"]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        msi: true,
        iconUrl: "https://music.youtube.com/favicon.ico",
        setupIcon: "assets/app_icon.ico",
        artifactName: "YTMusic"
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
