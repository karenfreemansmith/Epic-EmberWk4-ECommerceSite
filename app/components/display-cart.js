import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  total: Ember.computed(function() {
    var t=0;
    this.get('shoppingCart.items').forEach(function(item) {
      t+=parseFloat(item.price);
    });
    return t;
  })
});
