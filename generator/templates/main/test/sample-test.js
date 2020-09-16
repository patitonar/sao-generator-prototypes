<%- testImports -%>

describe("Greeter", function() {
<%- testContractVar -%>
  it("Should return the new greeting once it's changed", async function() {
<%- testContractInstance -%>
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
