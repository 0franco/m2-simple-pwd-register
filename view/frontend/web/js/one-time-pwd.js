define([
    'jquery',
    'uiElement'
], function ($, Element) {

    return Element.extend({

        initialize: function () {
            this._super();

            $('#password').change(function () {
                $('#password-confirmation').val($(this).val()).change();
            });
        }
    });
});