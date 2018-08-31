'use strict';

module.exports = function (settings) {

  if (!gtag) {
    turbine.logger.error('It appears you do not have gtag.js loaded onto your site. Please go to the extension catalog, and download the gtag.js extension package. You will need to add your Google Ads conversion ID.')
  } else {
    var eventData = {
      'send_to': settings.conversionId + '/' + settings.conversionLabel
    };
    if (settings.conversionValue) {
      eventData.conversionValue = settings.conversionValue
    }
    if (settings.currencyCode) {
      eventData.currencyCode = settings.currencyCode
    }
    if (settings.orderId) {
      eventData.orderId = settings.orderId
    }
    gtag('event', 'conversion', eventData);
  }
};