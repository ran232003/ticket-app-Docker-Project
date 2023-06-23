//will garantee changes of app in kuberneties

module.exports = {
  webpack: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
