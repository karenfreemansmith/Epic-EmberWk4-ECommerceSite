import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'https://openapi.etsy.com/v2/listings/'+params.product_id+'/images?method=GET&api_key=pl2m1ozgt5dd3v33i7lgeo6u';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
