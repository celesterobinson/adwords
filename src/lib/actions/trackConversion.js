// 'use strict';

// module.exports = function(settings) {
//   if(!gtag) {
//     turbine.logger.error('It appears you do not have gtag.js loaded onto your site. Please go to the extension catalog, and download the gtag.js extension package. You will need to add your Google Ads conversion ID.')
//   } else {
//     gtag('event', 'conversion', {
//       'send_to': settings.conversionId + '/' + settings.conversionLabel,
//       'conversionValue': Number(settings.conversionValue),
//       'currencyCode': settings.currencyCode,
//       'orderId': settings.orderId
//     });
//   }
// };