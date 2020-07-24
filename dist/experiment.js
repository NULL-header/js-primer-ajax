"use strict";
var ber = "==============";
var runExperiment = function (target, name, descriptor) {
    var f = descriptor.value;
    if (!f)
        throw new Error("The decorator can be used normal method.");
    console.log(ber);
    console.log(name);
    f();
    console.log(ber);
};
var Experiment = (function () {
    function Experiment() {
    }
    return Experiment;
}());
var exp = new Experiment();
