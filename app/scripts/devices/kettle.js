'use strict';

var kettle = {
  uri: 'http://api.lelylan.com/devices/10',
  id: '10',
  name: 'Kettle',
  categories: ['appliances'],
  type: { uri: 'http://api.lelylan.com/types/10', id: '10' },
  physical: { uri: 'http://arduino.house.com/10' },
  pending: false,
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1', value: 'on', expected: 'on', pending: false,
    accepted: {'on': 'Power On', 'off': 'Power Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2', value: 'on', expected: 'on', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3', value: '18', expected: '18', pending: false,
    accepted: null
  }],
  creator_id: '1',
  owner_id: '1',
  created_at: '2012-09-01T16:00:32Z',
  updated_at: '2013-04-10T16:19:20Z',
  updated_from: 'Lelylan Demo'
};

var kettleType = {
  uri: 'http://api.lelylan.com/types/10',
  id: '10',
  name: 'Kettle',
  created_at: '2012-09-01T15:01:22Z',
  updated_at: '2012-09-01T15:01:22Z',
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1',
    name: 'Power',
    default: 'off',
    accepted: {'on': 'On', 'off': 'Off'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2',
    name: 'Heating',
    default: 'off',
    accepted: {'on': 'Activated', 'off': 'Deactivated'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3',
    name: 'Water Temperature',
    default: '18',
    accepted: null,
    type: 'range',
    range: { min: 0, max: 150, step: 5 }
  }],
  functions: [{
    uri: 'http://api.lelylan.com/functions/1',
    id: '1',
    name: 'Start Heating Water',
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      expected: 'on'
    }, {
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: 'on'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/2',
    id: '2',
    name: 'Stop Heating Water',
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      expected: 'on'
    }, {
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: 'off'
    }]
  }],
  statuses: [{
    uri: 'http://api.lelylan.com/statuses/1',
    id: '1',
    name: 'Heating water',
    function: { uri: 'http://api.lelylan.com/functions/2', id: '2' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      values: ['on'],
      pending: null,
    }]
  }, {
    uri: 'http://api.lelylan.com/statuses/2',
    id: '2',
    name: 'Not heating',
    function: { uri: 'http://api.lelylan.com/functions/1', id: '1' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      values: ['off'],
      pending: null,
    }]
  }]
};
