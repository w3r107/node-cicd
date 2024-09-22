
module.exports = {
  apps: [
    {
      name: "pm2-deploy",
      script: "index.js",
    },
  ],
  deploy: {
    production: {
      user: "w3r107",
      host: "http://172.25.68.239/",
      path: "project-path-in-remote-server",
      repo: "git@github.com:w3r107/react-cicd.git",
      ref: "origin/main",
      key: "ssh-key-path-in-local-machine",
      "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
    },
  },
};
