// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2300',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.51 (rd_rdfe_stable.140226-1543) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '47dbb732495d7dff933029863e282e43',
  date: 'Wed, 05 Mar 2014 00:30:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/westeuropewebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(307, "<string xmlns=\"http://schemas.microsoft.com/2003/10/Serialization/\"/>", { 'content-length': '69',
  'content-type': 'application/xml; charset=utf-8',
  location: 'https://ussouth2.management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/westeuropewebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Wed, 05 Mar 2014 00:30:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/eastuswebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>clitest1</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitest1.azurewebsites.net</a:string><a:string>clitest1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitest1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitest1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitest1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-03-05T00:27:03.63</LastModifiedTimeUtc><Name>clitest1</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitest1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitest1</SelfLink><ServerFarm i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitest1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitest1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>jklfsZchjza2du0Xa5ME7rBj3vrldXDH5xEwiQ24bkniDWcil2aFj1Rbmjt9</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><TrafficManagerHostNames i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>clitests2</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests2.azurewebsites.net</a:string><a:string>clitests2.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests2.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests2.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests2.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-03-05T00:25:22.333</LastModifiedTimeUtc><Name>clitests2</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitests2</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitests2</SelfLink><ServerFarm i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitests2.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitests2</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>9gpiSfMkwou1LAmcGS8vp6wYFl9mi4Xuu8YYjeAdfPkCvcnolqv2tLf905YM</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><TrafficManagerHostNames i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>clitests1</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string><a:string>clitests1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-03-05T00:24:50.177</LastModifiedTimeUtc><Name>clitests1</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitests1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitests1</SelfLink><ServerFarm i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitests1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitests1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>8eH2ec71pS9AlcRjKy4KJ99GgryYN7XFlumEdLNeml5gNwBZZcngcgviFkHu</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><TrafficManagerHostNames i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '7527',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.51 (rd_rdfe_stable.140226-1543) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '04b1649414827f05a929dd5585898339',
  date: 'Wed, 05 Mar 2014 00:30:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/northcentraluswebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.51 (rd_rdfe_stable.140226-1543) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'f2cd13e2540977fa98a5a02444b8d5c9',
  date: 'Wed, 05 Mar 2014 00:30:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/northeuropewebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.51 (rd_rdfe_stable.140226-1543) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '0510d1b0aba17724b7d6ddcf1710ebc6',
  date: 'Wed, 05 Mar 2014 00:30:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/westuswebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>foobarnew</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>foobarnew.azurewebsites.net</a:string><a:string>foobarnew.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>foobarnew.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>foobarnew.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>foobarnew.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-03-01T04:36:28.313</LastModifiedTimeUtc><Name>foobarnew</Name><Owner i:nil=\"true\"/><RepositorySiteName>foobarnew</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-bay-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/westuswebspace/sites/foobarnew</SelfLink><ServerFarm i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://foobarnew.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$foobarnew</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>aE7rRfhgeq5odlm5wuLAdilMFn8ruxBdkZPsfhfcdkFY2jJ5pmg70beALbjj</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><TrafficManagerHostNames i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><UsageState>Normal</UsageState><WebSpace>westuswebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '2591',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.51 (rd_rdfe_stable.140226-1543) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '3c452877a3af762a8df73a0b6dabd9b8',
  date: 'Wed, 05 Mar 2014 00:30:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ussouth2.management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/westeuropewebspace/sites?&propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", { 'cache-control': 'private',
  'content-length': '110',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.52 (rd_rdfe_stable.140303-1629) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '9b4535f3711f7a4f8826bfc41f3d95bf',
  date: 'Wed, 05 Mar 2014 00:30:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces?properties=georegions')
  .reply(200, "<GeoRegions xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GeoRegion><Description i:nil=\"true\"/><Name>East Asia</Name><SortOrder>0</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>North Central US</Name><SortOrder>1</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>North Europe</Name><SortOrder>2</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>West US</Name><SortOrder>3</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>East US</Name><SortOrder>4</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>West Europe</Name><SortOrder>5</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>Japan East</Name><SortOrder>6</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>Japan West</Name><SortOrder>7</SortOrder></GeoRegion></GeoRegions>", { 'cache-control': 'private',
  'content-length': '905',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.51 (rd_rdfe_stable.140226-1543) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '377053d76ebc7e72862d4eafa572d4d5',
  date: 'Wed, 05 Mar 2014 00:30:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2300',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.51 (rd_rdfe_stable.140226-1543) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'e6d3c026de137a6aa711d356aeee4369',
  date: 'Wed, 05 Mar 2014 00:30:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/eastuswebspace/sites/clitest1?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(307, "<string xmlns=\"http://schemas.microsoft.com/2003/10/Serialization/\"/>", { 'content-length': '69',
  'content-type': 'application/xml; charset=utf-8',
  location: 'https://usnorth.management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/eastuswebspace/sites/clitest1?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername',
  server: 'Microsoft-HTTPAPI/2.0',
  date: 'Wed, 05 Mar 2014 00:30:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://usnorth.management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/eastuswebspace/sites/clitest1?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>clitest1</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitest1.azurewebsites.net</a:string><a:string>clitest1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitest1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitest1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitest1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-03-05T00:27:03.63</LastModifiedTimeUtc><Name>clitest1</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitest1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitest1</SelfLink><ServerFarm i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitest1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitest1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>jklfsZchjza2du0Xa5ME7rBj3vrldXDH5xEwiQ24bkniDWcil2aFj1Rbmjt9</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><TrafficManagerHostNames i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '2564',
  'content-type': 'application/xml; charset=utf-8',
  etag: '"1CF3809A1BB46E0"',
  server: '1.0.6198.52 (rd_rdfe_stable.140303-1629) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '6c66659d9b0c716c99d6a6cb3eacbc8f',
  date: 'Wed, 05 Mar 2014 00:30:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/eastuswebspace/sites/clitest1/config')
  .reply(200, "<SiteConfig xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AlwaysOn>false</AlwaysOn><AppSettings><NameValuePair><Name>WEBSITE_NODE_DEFAULT_VERSION</Name><Value>0.10.21</Value></NameValuePair></AppSettings><ConnectionStrings/><DefaultDocuments xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>Default.htm</a:string><a:string>Default.html</a:string><a:string>Default.asp</a:string><a:string>index.htm</a:string><a:string>index.html</a:string><a:string>iisstart.htm</a:string><a:string>default.aspx</a:string><a:string>index.php</a:string><a:string>hostingstart.html</a:string></DefaultDocuments><DetailedErrorLoggingEnabled>false</DetailedErrorLoggingEnabled><DocumentRoot i:nil=\"true\"/><HandlerMappings i:nil=\"true\"/><HttpLoggingEnabled>false</HttpLoggingEnabled><LoadBalancing>LeastRequests</LoadBalancing><LogsDirectorySizeLimit>35</LogsDirectorySizeLimit><ManagedPipelineMode>Integrated</ManagedPipelineMode><Metadata/><NetFrameworkVersion>v4.0</NetFrameworkVersion><NumberOfWorkers>1</NumberOfWorkers><PhpVersion>5.4</PhpVersion><PublishingPassword>jklfsZchjza2du0Xa5ME7rBj3vrldXDH5xEwiQ24bkniDWcil2aFj1Rbmjt9</PublishingPassword><PublishingUsername>$clitest1</PublishingUsername><RemoteDebuggingEnabled>false</RemoteDebuggingEnabled><RemoteDebuggingVersion i:nil=\"true\"/><RequestTracingEnabled>false</RequestTracingEnabled><RequestTracingExpirationTime i:nil=\"true\"/><ScmType>LocalGit</ScmType><Use32BitWorkerProcess>true</Use32BitWorkerProcess><VirtualApplications><VirtualApplication><PhysicalPath>site\\wwwroot</PhysicalPath><VirtualDirectories i:nil=\"true\"/><VirtualPath>/</VirtualPath></VirtualApplication></VirtualApplications><WebSocketsEnabled>false</WebSocketsEnabled><WindowsAuthEnabled>false</WindowsAuthEnabled></SiteConfig>", { 'cache-control': 'private',
  'content-length': '1824',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.51 (rd_rdfe_stable.140226-1543) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'dfede216b99678ef9c57a20b3e1459f9',
  date: 'Wed, 05 Mar 2014 00:30:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/WebSpaces/eastuswebspace/sites/clitest1?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername')
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><Cers i:nil=\"true\"/><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Csrs/><DeploymentId>clitest1</DeploymentId><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitest1.azurewebsites.net</a:string><a:string>clitest1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitest1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IPBasedSslState>NotConfigured</IPBasedSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitest1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitest1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2014-03-05T00:27:03.63</LastModifiedTimeUtc><Name>clitest1</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitest1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-blu-001.api.azurewebsites.windows.net:454/20130801/websystems/websites/web/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastuswebspace/sites/clitest1</SelfLink><ServerFarm i:nil=\"true\"/><SiteConfig i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties><NameValuePair><Name>RepositoryUri</Name><Value>https://clitest1.scm.azurewebsites.net</Value></NameValuePair><NameValuePair><Name>PublishingUsername</Name><Value>$clitest1</Value></NameValuePair><NameValuePair><Name>PublishingPassword</Name><Value>jklfsZchjza2du0Xa5ME7rBj3vrldXDH5xEwiQ24bkniDWcil2aFj1Rbmjt9</Value></NameValuePair></Properties></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><TrafficManagerHostNames i:nil=\"true\" xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><UsageState>Normal</UsageState><WebSpace>eastuswebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '2564',
  'content-type': 'application/xml; charset=utf-8',
  etag: '"1CF3809A1BB46E0"',
  server: '1.0.6198.51 (rd_rdfe_stable.140226-1543) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'ce5d6886311175d7b6f012209f309668',
  date: 'Wed, 05 Mar 2014 00:30:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://clitest1.scm.azurewebsites.net:443')
  .get('/api/settings')
  .reply(200, "{\"deployment_branch\":\"master\",\"SCM_TRACE_LEVEL\":\"1\",\"SCM_COMMAND_IDLE_TIMEOUT\":\"60\",\"SCM_LOGSTREAM_TIMEOUT\":\"1800\",\"SCM_BUILD_ARGS\":\"\",\"aspnet:PortableCompilationOutput\":\"true\",\"aspnet:PortableCompilationOutputSnapshotType\":\"Microsoft.Web.Compilation.Snapshots.SnapshotHelper, Microsoft.Web.Compilation.Snapshots, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\",\"aspnet:DisableFcnDaclRead\":\"true\",\"SCM_GIT_USERNAME\":\"windowsazure\",\"SCM_GIT_EMAIL\":\"windowsazure\",\"webpages:Version\":\"3.0.0.0\",\"webpages:Enabled\":\"true\",\"ScmType\":\"LocalGit\",\"WEBSITE_NODE_DEFAULT_VERSION\":\"0.10.21\",\"WEBSITE_SITE_NAME\":\"clitest1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '629',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'set-cookie': 
   [ 'ARRAffinity=462716b27beb795c09df205e893d3e263b1ec9b710c92f7c4203f4b63ac1aed2;Path=/;Domain=clitest1.scm.azurewebsites.net',
     'WAWebSiteSID=817a86428bce4c1f8edfbd9bfd984765; Path=/; HttpOnly' ],
  date: 'Wed, 05 Mar 2014 00:30:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://clitest1.scm.azurewebsites.net:443')
  .get('/api/diagnostics/settings/')
  .reply(200, "{}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'set-cookie': 
   [ 'ARRAffinity=462716b27beb795c09df205e893d3e263b1ec9b710c92f7c4203f4b63ac1aed2;Path=/;Domain=clitest1.scm.azurewebsites.net',
     'WAWebSiteSID=52cdf672f8464af5a12109bfd8f505ab; Path=/; HttpOnly' ],
  date: 'Wed, 05 Mar 2014 00:30:33 GMT' });
 return result; }]];