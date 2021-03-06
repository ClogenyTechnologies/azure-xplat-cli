﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var networkUtil = new NetworkTestUtil();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-lb-inbound-nat-rule-tests',
  groupName = 'xplat-test-inbound-nat-rule',
  location;
var index = 0;

var loadBalancerName;
var loadBalancerId;
var publicIPAddressName;
var publicIPAddressId;
var frontendIPConfigurationName;
var frontendIPConfigurationId;

var inboundNatRules = {
  protocol: 'Udp',
  protocolNew: 'Tcp',
  frontendPort: '123',
  frontendPortNew: '321',
  backendPort: '456',
  backendPortNew: '654',
  idleTimeoutInMinutes: '7',
  idleTimeoutInMinutesNew: '17',
  enableFloatingIP: 'true',
  enableFloatingIPNew: 'false',
  name: 'inboundNatRuleName'
};
inboundNatRules.loadBalancerName = 'loadBalancerName';
inboundNatRules.publicIPAddressName = 'publicIPAddressName';
inboundNatRules.frontendIPConfigurationName = 'frontendIPConfigurationName';

var publicIPAddress = {
  location: 'westus'
};
var loadBalancer = {
  location: 'westus'
};
var frontendIPConfiguration = {
};
var inboundNatRulesDefault = {
  protocol: 'TCP',
  frontendPort: '80',
  backendPort: '80',
  idleTimeoutInMinutes: '4',
  enableFloatingIP: 'false',
  loadBalancerName: 'loadBalancerName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'inboundNatRulesDefaultName',
  group: groupName
};
var protocolOutOfRange = {
  protocol: 'TcpUdp',
  loadBalancerName: 'loadBalancerName',
  name: 'ProtocolOutOfRangeName',
  group: groupName
};
var frontendPortUnderAllowedValue = {
  frontendPort: '0',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortUnderAllowedValueName',
  group: groupName
};
var frontendPortOverAllowedValue = {
  frontendPort: '65535',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortOverAllowedValueName',
  group: groupName
};
var backendPortOutOfRange = {
  backendPort: '65536',
  loadBalancerName: 'loadBalancerName',
  name: 'BackendPortOutOfRangeName',
  group: groupName
};
var idleTimeoutInMinutesOverAllowedValue = {
  idleTimeoutInMinutes: '31',
  loadBalancerName: 'loadBalancerName',
  name: 'IdleTimeoutInMinutesOverAllowedValueName',
  group: groupName
};
var idleTimeoutInMinutesUnderAllowedValue = {
  idleTimeoutInMinutes: '3',
  loadBalancerName: 'loadBalancerName',
  name: 'IdleTimeoutInMinutesUnderAllowedValueName',
  group: groupName
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = inboundNatRules.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        inboundNatRules.location = location;
        inboundNatRules.group = groupName;
        inboundNatRules.name = suite.isMocked ? inboundNatRules.name : suite.generateId(inboundNatRules.name, null);
        if(!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network lb create -g {1} -n loadBalancerName --location {location} --json'.formatArgs(loadBalancer, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);
              protocolOutOfRange.loadBalancerId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.loadBalancerId, null);
              frontendPortUnderAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(frontendPortUnderAllowedValue.loadBalancerId, null);
              frontendPortOverAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(frontendPortOverAllowedValue.loadBalancerId, null);
              backendPortOutOfRange.loadBalancerId = suite.isMocked ? output.id : suite.generateId(backendPortOutOfRange.loadBalancerId, null);
              idleTimeoutInMinutesOverAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesOverAllowedValue.loadBalancerId, null);
              idleTimeoutInMinutesUnderAllowedValue.loadBalancerId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.loadBalancerId, null);
              var cmd = 'network public-ip create -g {1} -n publicIPAddressName --location {location} --json'.formatArgs(publicIPAddress, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                protocolOutOfRange.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.publicIPAddressId, null);
                frontendPortUnderAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(frontendPortUnderAllowedValue.publicIPAddressId, null);
                frontendPortOverAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(frontendPortOverAllowedValue.publicIPAddressId, null);
                backendPortOutOfRange.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(backendPortOutOfRange.publicIPAddressId, null);
                idleTimeoutInMinutesOverAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesOverAllowedValue.publicIPAddressId, null);
                idleTimeoutInMinutesUnderAllowedValue.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.publicIPAddressId, null);
                var cmd = 'network lb frontend-ip create -g {1} -n frontendIPConfigurationName  --lb-name loadBalancerName --public-ip-name publicIPAddressName --json'.formatArgs(frontendIPConfiguration, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var output = JSON.parse(result.text);
                  protocolOutOfRange.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(protocolOutOfRange.frontendIPConfigurationId, null);
                  frontendPortUnderAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(frontendPortUnderAllowedValue.frontendIPConfigurationId, null);
                  frontendPortOverAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(frontendPortOverAllowedValue.frontendIPConfigurationId, null);
                  backendPortOutOfRange.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(backendPortOutOfRange.frontendIPConfigurationId, null);
                  idleTimeoutInMinutesOverAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesOverAllowedValue.frontendIPConfigurationId, null);
                  idleTimeoutInMinutesUnderAllowedValue.frontendIPConfigurationId = suite.isMocked ? output.id : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.frontendIPConfigurationId, null);
                  done();
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          protocolOutOfRange.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', protocolOutOfRange.loadBalancerName) : suite.generateId(protocolOutOfRange.loadBalancerId, null)
          frontendPortUnderAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', frontendPortUnderAllowedValue.loadBalancerName) : suite.generateId(frontendPortUnderAllowedValue.loadBalancerId, null)
          frontendPortOverAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', frontendPortOverAllowedValue.loadBalancerName) : suite.generateId(frontendPortOverAllowedValue.loadBalancerId, null)
          backendPortOutOfRange.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', backendPortOutOfRange.loadBalancerName) : suite.generateId(backendPortOutOfRange.loadBalancerId, null)
          idleTimeoutInMinutesOverAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', idleTimeoutInMinutesOverAllowedValue.loadBalancerName) : suite.generateId(idleTimeoutInMinutesOverAllowedValue.loadBalancerId, null)
          idleTimeoutInMinutesUnderAllowedValue.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', idleTimeoutInMinutesUnderAllowedValue.loadBalancerName) : suite.generateId(idleTimeoutInMinutesUnderAllowedValue.loadBalancerId, null)
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('inbound nat rules', function () {
      this.timeout(hour);
      it('create should create inbound nat rules', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name} --protocol {protocol} --frontend-port {frontendPort} --backend-port {backendPort} --idle-timeout {idleTimeoutInMinutes} --enable-floating-ip {enableFloatingIP} --lb-name {loadBalancerName}  --frontend-ip-name {frontendIPConfigurationName} --json'.formatArgs(inboundNatRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(inboundNatRules.name);
          output.protocol.toLowerCase().should.equal(inboundNatRules.protocol.toLowerCase());
          output.frontendPort.should.equal(parseInt(inboundNatRules.frontendPort, 10));
          output.backendPort.should.equal(parseInt(inboundNatRules.backendPort, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(inboundNatRules.idleTimeoutInMinutes, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(inboundNatRules.enableFloatingIP));
          done();
        });
      });
      it('show should display inbound nat rules details', function (done) {
        var cmd = 'network lb inbound-nat-rule show -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(inboundNatRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.name.should.equal(inboundNatRules.name);
          output.protocol.toLowerCase().should.equal(inboundNatRules.protocol.toLowerCase());
          output.frontendPort.should.equal(parseInt(inboundNatRules.frontendPort, 10));
          output.backendPort.should.equal(parseInt(inboundNatRules.backendPort, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(inboundNatRules.idleTimeoutInMinutes, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(inboundNatRules.enableFloatingIP));
          done();
        });
      });
      it('set should update inbound nat rules', function (done) {
        var cmd = 'network lb inbound-nat-rule set -g {group} -n {name} --protocol {protocolNew} --frontend-port {frontendPortNew} --backend-port {backendPortNew} --idle-timeout {idleTimeoutInMinutesNew} --enable-floating-ip {enableFloatingIPNew} --lb-name {loadBalancerName} --json'.formatArgs(inboundNatRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(inboundNatRules.name);
          output.protocol.toLowerCase().should.equal(inboundNatRules.protocolNew.toLowerCase());
          output.frontendPort.should.equal(parseInt(inboundNatRules.frontendPortNew, 10));
          output.backendPort.should.equal(parseInt(inboundNatRules.backendPortNew, 10));
          output.idleTimeoutInMinutes.should.equal(parseInt(inboundNatRules.idleTimeoutInMinutesNew, 10));
          output.enableFloatingIP.should.equal(utils.parseBool(inboundNatRules.enableFloatingIPNew));
          done();
        });
      });
      it('list should display all inbound nat rules in resource group', function (done) {
        var cmd = 'network lb inbound-nat-rule list -g {group} --lb-name {loadBalancerName} --json'.formatArgs(inboundNatRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === inboundNatRules.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete inbound nat rules', function (done) {
        var cmd = 'network lb inbound-nat-rule delete -g {group} -n {name} --quiet --lb-name {loadBalancerName} --json'.formatArgs(inboundNatRules);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network lb inbound-nat-rule show -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(inboundNatRules);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.should.be.empty;
            done();
          });
        });
      });
      it('create with defaults should create inbound nat rules with default values', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name}  --lb-name {loadBalancerName}  --json'.formatArgs(inboundNatRulesDefault);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(inboundNatRulesDefault.name);
          output.protocol.toLowerCase().should.equal(inboundNatRulesDefault.protocol.toLowerCase());;
          output.frontendPort.should.equal(parseInt(inboundNatRulesDefault.frontendPort, 10));;
          output.backendPort.should.equal(parseInt(inboundNatRulesDefault.backendPort, 10));;
          output.idleTimeoutInMinutes.should.equal(parseInt(inboundNatRulesDefault.idleTimeoutInMinutes, 10));;
          output.enableFloatingIP.should.equal(utils.parseBool(inboundNatRulesDefault.enableFloatingIP));
          var cmd = 'network lb inbound-nat-rule delete -g {group} -n {name} --quiet --lb-name {loadBalancerName} --json'.formatArgs(inboundNatRulesDefault);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });

      it('create should fail for protocol out of range', function (done) {
        var cmd = ('network lb inbound-nat-rule create -g {group} -n {name} --protocol {protocol} --lb-name {loadBalancerName}  --json').formatArgs(protocolOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port under allowed value', function (done) {
        var cmd = ('network lb inbound-nat-rule create -g {group} -n {name} --frontend-port {frontendPort} --lb-name {loadBalancerName}  --json').formatArgs(frontendPortUnderAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port over allowed value', function (done) {
        var cmd = ('network lb inbound-nat-rule create -g {group} -n {name} --frontend-port {frontendPort} --lb-name {loadBalancerName}  --json').formatArgs(frontendPortOverAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for backend port out of range', function (done) {
        var cmd = ('network lb inbound-nat-rule create -g {group} -n {name} --backend-port {backendPort} --lb-name {loadBalancerName}  --json').formatArgs(backendPortOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout in minutes over allowed value', function (done) {
        var cmd = ('network lb inbound-nat-rule create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --lb-name {loadBalancerName}  --json').formatArgs(idleTimeoutInMinutesOverAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout in minutes under allowed value', function (done) {
        var cmd = ('network lb inbound-nat-rule create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --lb-name {loadBalancerName}  --json').formatArgs(idleTimeoutInMinutesUnderAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});
