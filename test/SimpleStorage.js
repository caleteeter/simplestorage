const SimpleStorage = artifacts.require('SimpleStorage');

contract("SimpleStorage contract tests", (accounts) => {
    let contract;
    let owner;

    before(async () => {
        contract = await SimpleStorage.deployed();
        owner = accounts[0];
    });

    it("Should pass if the contract is deployed", async () => {
        let address = await contract.address;
        assert.ok(address);
    });

    it("Should pass if default value for stored data is correct", async () => {
        let defaultValue = await contract.get.call();
        assert.strictEqual(defaultValue.toNumber(), 7);
    });

    it("Should pass if new value is stored correctly", async () => {
        await contract.set(42);
        let newValue = await contract.get.call();
        assert.strictEqual(newValue.toNumber(), 42);
    });
})