module.exports = {
  apps: [
    {
      name: "oversee",
      script: "node",
      args: ".",
      cwd: "./Oversee",
      watch: false
    },
    {
      name: "hydra",
      script: "node",
      args: ".",
      cwd: "./HydraDAEMON",  // Adjust if your folder is named differently
      watch: false
    }
  ]
};
