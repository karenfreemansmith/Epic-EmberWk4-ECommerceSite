import Ember from 'ember';

export function productFilter(params) {
  var product = params[0];
  var id = params[1];
  console.log(id + ":" + product.listing_id);
  if(product.listing_id === parseInt(id)) {
    return Ember.String.htmlSafe("<h1><a href='"+product.url+"' target='_blank'>"+product.title+"</h1>");
  }
}

export default Ember.Helper.helper(productFilter);
