import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // var key = config.myApiKey;
    var url = 'https://openapi.etsy.com/v2/listings/trending?limit=50&offset=0&api_key=pl2m1ozgt5dd3v33i7lgeo6u&category=69201265&includes=Images';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
