///<reference path="knockout-2.1.0.debug.js"/>

$(function () {
    var data = [
        new tagItem("Aston Martin", 1),
        new tagItem("Audi", 2),
        new tagItem("Bugatti", 3),
        new tagItem("Ferrari", 4),
        new tagItem("Koenigsegg", 5),
        new tagItem("Lamborghini", 6),
        new tagItem("McLaren", 7),
        new tagItem("Porsche", 8)
    ];

    var viewModel = {
        manufacturers: ko.observableArray(data),
        manufacturerToAdd: ko.observable(""),
        addManufacturer: function () {
            this.manufacturers.push({Name: this.manufacturerToAdd()});
        }
    };
    ko.applyBindings(viewModel);
});