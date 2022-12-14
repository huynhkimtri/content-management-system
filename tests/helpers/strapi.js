const strapi = require("@strapi/strapi");
const fs = require("fs");

const setupStrapi = async () => {
  global.strapiInstance = await strapi().load();
  global.strapiInstance.server.mount();
  global.strapiServer = global.strapiInstance.server.app.callback();
};

/** this code is called after all the tests are finished */
const teardownStrapi = () => {
  global.strapiInstance.destroy().then(() => {
    //delete test database after all tests
    const dbSettings = global.strapiInstance.config.get(
      "database.connections.default.settings"
    );
    if (dbSettings && dbSettings.filename) {
      const tmpDbFile = `${__dirname}/../${dbSettings.filename}`;
      if (fs.existsSync(tmpDbFile)) {
        fs.unlinkSync(tmpDbFile);
      }
    }
  });
};

module.exports = { setupStrapi, teardownStrapi };
