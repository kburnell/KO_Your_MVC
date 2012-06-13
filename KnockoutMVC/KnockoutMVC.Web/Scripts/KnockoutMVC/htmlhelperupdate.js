///<reference path="~/Scripts/jquery-1.7.2.min.js"/>
///<reference path="~/Scripts/knockout-2.1.0.debug.js"/>

var dreamCarForm = window.dreamCarForm || {};

var viewModel = {
    id: dreamCarForm.id,
    make: ko.observable(dreamCarForm.make),
    model: ko.observable(dreamCarForm.model),
    year: ko.observable(dreamCarForm.year)
};
ko.applyBindings(viewModel);