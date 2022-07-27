const SimpleStorage1 = artifacts.require("SimpleStorage1");

contract("Simple Storage 1", accounts => {
    let instance = null;
    before(async () => {
        instance = await SimpleStorage1.deployed()
    });

    it("should not set the data", async () => {
        try {
            await instance.setData(10, {from: accounts[1]});
            assert.fail("The transaction should have thrown an error");
        } catch(err) {
            assert.include(err.message, "revert", "The error message should contain 'revert'");
        }
    }); 
})