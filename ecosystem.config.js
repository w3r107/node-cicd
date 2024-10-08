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
      host: "172.25.68.239",
      path: "/home/w3r107/webdev/node-cidcd1",
      repo: "git@github.com:w3r107/react-cicd.git",
      ref: "origin/main",
      key: "/home/w3r107/.ssh/id_ed25519",
      "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
    },
  },
};