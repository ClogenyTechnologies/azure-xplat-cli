// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5313.azuredatalakeanalytics.net\",\"accountId\":\"a7a85e92-c9df-4097-8140-7756c74cbc93\",\"creationTime\":\"2016-06-16T22:09:35.3023737Z\",\"lastModifiedTime\":\"2016-06-16T22:09:35.3023737Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5313\",\"name\":\"xplattestadla5313\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ec8f050a-ff3b-4b37-aafe-72918285203c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '5b482734-7889-406b-b7c2-87a8a9e60ad7',
  'x-ms-routing-request-id': 'WESTUS:20160616T221044Z:5b482734-7889-406b-b7c2-87a8a9e60ad7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5313.azuredatalakeanalytics.net\",\"accountId\":\"a7a85e92-c9df-4097-8140-7756c74cbc93\",\"creationTime\":\"2016-06-16T22:09:35.3023737Z\",\"lastModifiedTime\":\"2016-06-16T22:09:35.3023737Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5313\",\"name\":\"xplattestadla5313\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ec8f050a-ff3b-4b37-aafe-72918285203c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '5b482734-7889-406b-b7c2-87a8a9e60ad7',
  'x-ms-routing-request-id': 'WESTUS:20160616T221044Z:5b482734-7889-406b-b7c2-87a8a9e60ad7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792/DataLakeStoreAccounts/xplattestadls4321?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792/dataLakeStoreAccounts/xplattestadls4321\",\"name\":\"xplattestadls4321\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '19b9f3e3-e778-40dc-b7ef-fc648fdc05b8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '9aed295c-e1ed-41dc-9e17-7e26f423668a',
  'x-ms-routing-request-id': 'WESTUS:20160616T221045Z:9aed295c-e1ed-41dc-9e17-7e26f423668a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792/DataLakeStoreAccounts/xplattestadls4321?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792/dataLakeStoreAccounts/xplattestadls4321\",\"name\":\"xplattestadls4321\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '19b9f3e3-e778-40dc-b7ef-fc648fdc05b8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '9aed295c-e1ed-41dc-9e17-7e26f423668a',
  'x-ms-routing-request-id': 'WESTUS:20160616T221045Z:9aed295c-e1ed-41dc-9e17-7e26f423668a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5313.azuredatalakeanalytics.net\",\"accountId\":\"a7a85e92-c9df-4097-8140-7756c74cbc93\",\"creationTime\":\"2016-06-16T22:09:35.3023737Z\",\"lastModifiedTime\":\"2016-06-16T22:09:35.3023737Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5313\",\"name\":\"xplattestadla5313\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ef032ddb-ce7c-47df-aaaf-6d3d4584bee2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '88180d1f-77ba-4eda-83e4-c89554250454',
  'x-ms-routing-request-id': 'WESTUS:20160616T221046Z:88180d1f-77ba-4eda-83e4-c89554250454',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5313.azuredatalakeanalytics.net\",\"accountId\":\"a7a85e92-c9df-4097-8140-7756c74cbc93\",\"creationTime\":\"2016-06-16T22:09:35.3023737Z\",\"lastModifiedTime\":\"2016-06-16T22:09:35.3023737Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5313\",\"name\":\"xplattestadla5313\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ef032ddb-ce7c-47df-aaaf-6d3d4584bee2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '88180d1f-77ba-4eda-83e4-c89554250454',
  'x-ms-routing-request-id': 'WESTUS:20160616T221046Z:88180d1f-77ba-4eda-83e4-c89554250454',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5047\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4321\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5047\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":60,\"maxJobCount\":3,\"hiveMetastores\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '919',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '60d366b8-98a1-4d33-a536-79c2b5cf21ee',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '666dcc80-808a-4a85-95b9-b83b2bda7320',
  'x-ms-routing-request-id': 'WESTUS:20160616T221047Z:666dcc80-808a-4a85-95b9-b83b2bda7320',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5047\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4321\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5047\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":60,\"maxJobCount\":3,\"hiveMetastores\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '919',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '60d366b8-98a1-4d33-a536-79c2b5cf21ee',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '666dcc80-808a-4a85-95b9-b83b2bda7320',
  'x-ms-routing-request-id': 'WESTUS:20160616T221047Z:666dcc80-808a-4a85-95b9-b83b2bda7320',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5313.azuredatalakeanalytics.net\",\"accountId\":\"a7a85e92-c9df-4097-8140-7756c74cbc93\",\"creationTime\":\"2016-06-16T22:09:35.3023737Z\",\"lastModifiedTime\":\"2016-06-16T22:09:35.3023737Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5313\",\"name\":\"xplattestadla5313\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'fedcc87d-27bb-49c0-a571-5fb8de9fe0a7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'fbf43028-b28d-4d23-bc8a-4577efee297b',
  'x-ms-routing-request-id': 'WESTUS:20160616T221048Z:fbf43028-b28d-4d23-bc8a-4577efee297b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5313.azuredatalakeanalytics.net\",\"accountId\":\"a7a85e92-c9df-4097-8140-7756c74cbc93\",\"creationTime\":\"2016-06-16T22:09:35.3023737Z\",\"lastModifiedTime\":\"2016-06-16T22:09:35.3023737Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5313\",\"name\":\"xplattestadla5313\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'fedcc87d-27bb-49c0-a571-5fb8de9fe0a7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'fbf43028-b28d-4d23-bc8a-4577efee297b',
  'x-ms-routing-request-id': 'WESTUS:20160616T221048Z:fbf43028-b28d-4d23-bc8a-4577efee297b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792/DataLakeStoreAccounts/xplattestadls4321?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'cc2872c5-29f0-42ff-bfa5-91dabb1a6cdc',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ea1f589e-e61f-4ded-a7dd-b4701913459c',
  'x-ms-routing-request-id': 'WESTUS:20160616T221049Z:ea1f589e-e61f-4ded-a7dd-b4701913459c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792/DataLakeStoreAccounts/xplattestadls4321?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'cc2872c5-29f0-42ff-bfa5-91dabb1a6cdc',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ea1f589e-e61f-4ded-a7dd-b4701913459c',
  'x-ms-routing-request-id': 'WESTUS:20160616T221049Z:ea1f589e-e61f-4ded-a7dd-b4701913459c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5313.azuredatalakeanalytics.net\",\"accountId\":\"a7a85e92-c9df-4097-8140-7756c74cbc93\",\"creationTime\":\"2016-06-16T22:09:35.3023737Z\",\"lastModifiedTime\":\"2016-06-16T22:09:35.3023737Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5313\",\"name\":\"xplattestadla5313\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '39795de8-9b31-459d-b912-244916924bd6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b4e1ddfc-7ea6-4d6f-ba6b-f7a0e8f6cef6',
  'x-ms-routing-request-id': 'WESTUS:20160616T221049Z:b4e1ddfc-7ea6-4d6f-ba6b-f7a0e8f6cef6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5313.azuredatalakeanalytics.net\",\"accountId\":\"a7a85e92-c9df-4097-8140-7756c74cbc93\",\"creationTime\":\"2016-06-16T22:09:35.3023737Z\",\"lastModifiedTime\":\"2016-06-16T22:09:35.3023737Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5313\",\"name\":\"xplattestadla5313\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1146',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '39795de8-9b31-459d-b912-244916924bd6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b4e1ddfc-7ea6-4d6f-ba6b-f7a0e8f6cef6',
  'x-ms-routing-request-id': 'WESTUS:20160616T221049Z:b4e1ddfc-7ea6-4d6f-ba6b-f7a0e8f6cef6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5047\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5047\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":60,\"maxJobCount\":3,\"hiveMetastores\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '841',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '5c8491d5-f7b0-4a10-8ea1-ec0e5b78ddae',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '3c43f9a1-7fad-4c23-b884-f107969c82a4',
  'x-ms-routing-request-id': 'WESTUS:20160616T221050Z:3c43f9a1-7fad-4c23-b884-f107969c82a4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls5047\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5047\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":60,\"maxJobCount\":3,\"hiveMetastores\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8792.azuredatalakeanalytics.net\",\"accountId\":\"a039a46b-70c1-4b24-8b24-e786df0034eb\",\"creationTime\":\"2016-06-16T22:10:21.2632194Z\",\"lastModifiedTime\":\"2016-06-16T22:10:42.4507259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8792\",\"name\":\"xplattestadla8792\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '841',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '5c8491d5-f7b0-4a10-8ea1-ec0e5b78ddae',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '3c43f9a1-7fad-4c23-b884-f107969c82a4',
  'x-ms-routing-request-id': 'WESTUS:20160616T221050Z:3c43f9a1-7fad-4c23-b884-f107969c82a4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 22:10:49 GMT',
  connection: 'close' });
 return result; }]];