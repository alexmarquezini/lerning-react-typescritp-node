var OptionalChainingNS;
(function (OptionalChainingNS) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined
    });
    console.log('car', car);
    console.log('wheels', car === null || car === void 0 ? void 0 : car.wheels);
    console.log('count', (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
    //Nullish Coalescing
    var val1 = undefined;
    var val2 = 10;
    var result = val1 !== null && val1 !== void 0 ? val1 : val2;
    console.log(result);
})(OptionalChainingNS || (OptionalChainingNS = {}));
