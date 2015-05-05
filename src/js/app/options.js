/**
 * Created by hellsigner on 4/30/15.
 */

define(['./options.local'], function(localOptions) {
    return _.extend({
        apiUrl: '//localhost:8080/api/pdv-contact'
    }, localOptions);
});