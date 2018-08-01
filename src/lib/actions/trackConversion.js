'use strict';
var loadGtag = turbine.getSharedModule('gtag.js', 'loadGtag');
var extensionSettings = turbin.getExtensionSettings();
var options = {
  send_page_view: !extensionSettings.preventAddingVisitor,
  conversion_linker: !extensionSettings.preventCookies
};
loadGtag();
gtag('config', extensionSettings.conversionId, options );

module.exports = function(settings) {
  gtag('event', 'conversion', {'send_to': extensionSettings.conversionId + '/' + extensionSettings.conversionLabel});
};
