// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourcegroups/armclibatchgroup7446?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclibatchgroup7446' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '034ee1ad-64e4-4153-893c-498f5327bdf2',
  'x-ms-correlation-request-id': '034ee1ad-64e4-4153-893c-498f5327bdf2',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214613Z:034ee1ad-64e4-4153-893c-498f5327bdf2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Oct 2016 21:46:13 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourcegroups/armclibatchgroup7446?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclibatchgroup7446' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '034ee1ad-64e4-4153-893c-498f5327bdf2',
  'x-ms-correlation-request-id': '034ee1ad-64e4-4153-893c-498f5327bdf2',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214613Z:034ee1ad-64e4-4153-893c-498f5327bdf2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Oct 2016 21:46:13 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourcegroups/armclibatchgroup7446?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7446\",\"name\":\"armclibatchgroup7446\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '0750167a-85ff-4756-a04a-6a238f8e4ea7',
  'x-ms-correlation-request-id': '0750167a-85ff-4756-a04a-6a238f8e4ea7',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214614Z:0750167a-85ff-4756-a04a-6a238f8e4ea7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Oct 2016 21:46:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourcegroups/armclibatchgroup7446?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7446\",\"name\":\"armclibatchgroup7446\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '0750167a-85ff-4756-a04a-6a238f8e4ea7',
  'x-ms-correlation-request-id': '0750167a-85ff-4756-a04a-6a238f8e4ea7',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214614Z:0750167a-85ff-4756-a04a-6a238f8e4ea7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Oct 2016 21:46:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[{\"name\":\"armclibatch4191\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch4191.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191\",\"type\":\"Microsoft.Batch/batchAccounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '418',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '33ac7d7f-8b1c-454a-82af-23eb1dfb5a1f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': '99f9e51e-58e6-4423-a863-8f164894ba21',
  'x-ms-correlation-request-id': '99f9e51e-58e6-4423-a863-8f164894ba21',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214615Z:99f9e51e-58e6-4423-a863-8f164894ba21',
  date: 'Tue, 04 Oct 2016 21:46:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[{\"name\":\"armclibatch4191\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch4191.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191\",\"type\":\"Microsoft.Batch/batchAccounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '418',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '33ac7d7f-8b1c-454a-82af-23eb1dfb5a1f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': '99f9e51e-58e6-4423-a863-8f164894ba21',
  'x-ms-correlation-request-id': '99f9e51e-58e6-4423-a863-8f164894ba21',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214615Z:99f9e51e-58e6-4423-a863-8f164894ba21',
  date: 'Tue, 04 Oct 2016 21:46:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7446/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '8945eaf3-2426-43c7-8770-0cccbe5e4cc2',
  'x-ms-correlation-request-id': '8945eaf3-2426-43c7-8770-0cccbe5e4cc2',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214616Z:8945eaf3-2426-43c7-8770-0cccbe5e4cc2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Oct 2016 21:46:15 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7446/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '8945eaf3-2426-43c7-8770-0cccbe5e4cc2',
  'x-ms-correlation-request-id': '8945eaf3-2426-43c7-8770-0cccbe5e4cc2',
  'x-ms-routing-request-id': 'WESTUS2:20161004T214616Z:8945eaf3-2426-43c7-8770-0cccbe5e4cc2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Oct 2016 21:46:15 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclibatchgroup7446'];};