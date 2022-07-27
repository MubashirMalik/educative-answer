const Migrations = artifacts.require("Migrations");
const SimpleStorage = artifacts.require("SimpleStorage");
const SimpleStorage1 = artifacts.require("SimpleStorage1");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SimpleStorage);
  deployer.deploy(SimpleStorage1);
};
