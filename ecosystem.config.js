module.exports = {
  apps : [{
    name: "likeitfrontend",
    script: "npm run start",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
