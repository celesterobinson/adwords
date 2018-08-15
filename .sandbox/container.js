module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1534376805886",
    "events": [{
      "modulePath": "sandbox/click.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "google-adwords/src/lib/actions/trackConversion.js",
      "settings": {
        "conversionId": "test",
        "conversionLabel": "test",
        "conversionValue": "43",
        "currencyCode": "test",
        "orderId": "test"
      }
    }],
    "name": "track conversion"
  }],
  "extensions": {},
  "property": {
    "settings": {}
  },
  "buildInfo": {
    "turbineVersion": "25.1.3",
    "turbineBuildDate": "2018-08-15T23:46:52.257Z",
    "buildDate": "2018-08-15T23:46:52.257Z",
    "environment": "development"
  }
}