// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/Microsoft.Compute/artifacttypes/vmextension/types/BGInfo/versions?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"2.1\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo/Versions/2.1\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '266',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c86b63f2-2920-41e8-8c7b-2db8458e6ff3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'fc907755-1857-4d58-b373-77465ebd063e',
  'x-ms-routing-request-id': 'WESTUS:20160503T064524Z:fc907755-1857-4d58-b373-77465ebd063e',
  date: 'Tue, 03 May 2016 06:45:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/Microsoft.Compute/artifacttypes/vmextension/types/BGInfo/versions?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"2.1\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo/Versions/2.1\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '266',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c86b63f2-2920-41e8-8c7b-2db8458e6ff3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'fc907755-1857-4d58-b373-77465ebd063e',
  'x-ms-routing-request-id': 'WESTUS:20160503T064524Z:fc907755-1857-4d58-b373-77465ebd063e',
  date: 'Tue, 03 May 2016 06:45:24 GMT',
  connection: 'close' });
 return result; }]];