// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
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
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-04-30-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/27bfd2aa-3638-4152-be68-69383280dd75?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/27bfd2aa-3638-4152-be68-69383280dd75?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '27bfd2aa-3638-4152-be68-69383280dd75',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'cabf4bdf-91ec-4acf-82bd-efd4455a5a69',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100132Z:cabf4bdf-91ec-4acf-82bd-efd4455a5a69',
  date: 'Thu, 16 Feb 2017 10:01:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate5906/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-04-30-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/27bfd2aa-3638-4152-be68-69383280dd75?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/27bfd2aa-3638-4152-be68-69383280dd75?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '27bfd2aa-3638-4152-be68-69383280dd75',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'cabf4bdf-91ec-4acf-82bd-efd4455a5a69',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100132Z:cabf4bdf-91ec-4acf-82bd-efd4455a5a69',
  date: 'Thu, 16 Feb 2017 10:01:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/27bfd2aa-3638-4152-be68-69383280dd75?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T10:01:32.7075968+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"27bfd2aa-3638-4152-be68-69383280dd75\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': 'c401901c-ce8b-4669-afe3-1085147ab1d6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': 'cca6c497-2028-4ea7-9bf5-57fffb6867ab',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100202Z:cca6c497-2028-4ea7-9bf5-57fffb6867ab',
  date: 'Thu, 16 Feb 2017 10:02:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/27bfd2aa-3638-4152-be68-69383280dd75?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T10:01:32.7075968+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"27bfd2aa-3638-4152-be68-69383280dd75\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': 'c401901c-ce8b-4669-afe3-1085147ab1d6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': 'cca6c497-2028-4ea7-9bf5-57fffb6867ab',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100202Z:cca6c497-2028-4ea7-9bf5-57fffb6867ab',
  date: 'Thu, 16 Feb 2017 10:02:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/27bfd2aa-3638-4152-be68-69383280dd75?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T10:01:32.7075968+00:00\",\r\n  \"endTime\": \"2017-02-16T10:02:31.287995+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"27bfd2aa-3638-4152-be68-69383280dd75\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '34dac052-bc0c-4497-9ee4-ce83a6a81d34',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': '84f810e1-d2e7-4010-8df8-5fef975aed09',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100232Z:84f810e1-d2e7-4010-8df8-5fef975aed09',
  date: 'Thu, 16 Feb 2017 10:02:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/27bfd2aa-3638-4152-be68-69383280dd75?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T10:01:32.7075968+00:00\",\r\n  \"endTime\": \"2017-02-16T10:02:31.287995+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"27bfd2aa-3638-4152-be68-69383280dd75\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '34dac052-bc0c-4497-9ee4-ce83a6a81d34',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': '84f810e1-d2e7-4010-8df8-5fef975aed09',
  'x-ms-routing-request-id': 'EASTASIA:20170216T100232Z:84f810e1-d2e7-4010-8df8-5fef975aed09',
  date: 'Thu, 16 Feb 2017 10:02:31 GMT',
  connection: 'close' });
 return result; }]];