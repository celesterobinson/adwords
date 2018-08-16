'use strict';

var loadGtag = turbine.getSharedModule('gtag.js', 'loadGtag');
loadGtag();

module.exports = function(settings) {
  gtag('config', settings.conversionId);
  gtag('event', 'conversion', {
    'send_to': settings.conversionId + '/' + settings.conversionLabel,
    'conversionValue': Number(settings.conversionValue),
    'currencyCode': settings.currencyCode,
    'orderId': settings.orderId
  });
};
