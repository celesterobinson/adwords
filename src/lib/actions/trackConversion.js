'use strict';
alert("We got to trackconversion.js")

var loadGtag = turbine.getSharedModule('gtag.js', 'loadGtag');
loadGtag();
alert("We got passed loading gtag")

module.exports = function(settings) {
  alert("we got inside this function");
  gtag('config', settings.conversionId);
  gtag('event', 'conversion', {
    'send_to': settings.conversionId + '/' + settings.conversionLabel,
    'conversionValue': Number(settings.conversionValue),
    'currencyCode': settings.currencyCode,
    'orderId': settings.orderId
  });
  alert("we finished");
};
