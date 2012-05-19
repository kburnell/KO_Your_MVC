///<reference path="~/Scripts/jquery-1.7.2.min.js"/>
///<reference path="~/Scripts/knockout-2.1.0.debug.js"/>

(function (getdreamcars, $, undefined) {

    getdreamcars.viewModel = function () {
        this.dreamcars = ko.mapping.fromJS(
                    [], {
                        key: function (dreamcar) { return ko.utils.unwrapObservable(dreamcar.Id); }
                    });
    };

    getdreamcars.getDataFromSource = function () {
        $.ajax({
            type: 'POST',
            url: '/Home/GetDreamCars',
            dataType: 'json',
            success: function (data) {
                var model = new getdreamcars.viewModel();
                model.dreamcars = ko.mapping.fromJS(data);
                ko.applyBindings(model);
            }
        });
    };
}(window.getdreamcars = window.getdreamcars || {}, jQuery));

$(document).ready(function () {
    getdreamcars.getDataFromSource();
});