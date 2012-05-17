///<reference path="knockout-2.1.0.debug.js"/>
///<reference path="~/Scripts/jquery-1.7.2.min.js"/>

$(function () {
    var data = [
        { Id: 1, Name: "Aston Martin" },
        { Id: 2, Name: "Audi" },
        { Id: 3, Name: "Bugatti" },
        { Id: 4, Name: "Ferrari" },
        { Id: 5, Name: "Koenigsegg" },
        { Id: 6, Name: "Lamborghini" },
        { Id: 7, Name: "McLaren" },
        { Id: 8, Name: "Porsche" }
    ];

    var viewModel = {
        manufacturers: ko.observableArray(data),
        manufacturerToAdd: ko.observable(""),
        selectedManufacturer: ko.observable(null),
        addManufacturer: function () {
            this.manufacturers.push({ Name: this.manufacturerToAdd() });
            this.manufacturerToAdd("");
        },
        selectManufacturer: function () {
            viewModel.selectedManufacturer(this);
        }

    };

    $(document).on("click", ".manufacturer-delete", function () {
        var itemToRemove = ko.dataFor(this);
        viewModel.manufacturers.remove(itemToRemove);
    });

    ko.applyBindings(viewModel);
});