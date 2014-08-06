var target = require("../target");
var chai = require("../../node_modules/chai/chai");

console.log(target.returnPlus(1,2));

describe("target", function () {
    describe("returnPlus", function () {
        it("２つの引数を足した値を返すこと", function () {
            chai.assert.equal(target.returnPlus(1,2), 2, "テストが通りませんでした");
        });
    });
});