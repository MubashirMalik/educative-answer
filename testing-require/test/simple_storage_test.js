const SimpleStorage = artifacts.require("SimpleStorage");

contract("Simple Storage", accounts => {
    let instance = null;
    before(async () => {
        instance = await SimpleStorage.deployed()
    });

    it("should set the data", async () => {
        await instance.setData(10);
        let result = await instance.getData();
        assert.equal(result, 10);
    }); 
})