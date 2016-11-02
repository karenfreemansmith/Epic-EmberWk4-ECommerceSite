import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  },
  model: function() {
    var url = 'https://openapi.etsy.com/v2/listings/'+this.product.product_id+'/images?method=GET&api_key=pl2m1ozgt5dd3v33i7lgeo6u';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
