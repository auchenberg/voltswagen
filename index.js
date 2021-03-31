const { spawn } = require("child_process");

(async () => {
  async function install() {
    let cwd = process.cwd();
    return new Promise((resolve, reject) => {
      const npm = spawn("npm", ["install", "volkswagen"], {
        stdio: "inherit",
        cwd,
        env: { ...process.env },
      });
      npm.on("close", () => resolve());
      npm.on("error", (err) => reject(err));
    });
  }

  await install();
  require("volkswagen");
})();
