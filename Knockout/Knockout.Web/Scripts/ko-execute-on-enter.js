///<reference path="knockout-2.1.0.debug.js"/>
///<reference path="jquery-1.7.2.min.js"/>

ko.bindingHandlers.executeOnEnter = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = valueAccessor();
        $(element).keypress(function(event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                value.call(viewModel);
                return false;
            }
            return true;
        });
    }
};