import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var id = params.product_id;
    var url = 'https://openapi.etsy.com/v2/listings/active?limit=25&offset=0&api_key=pl2m1ozgt5dd3v33i7lgeo6u&includes=Images';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return Ember.RSVP.hash({
        product: responseJSON.results,
        id
      });
    });
  }
});
