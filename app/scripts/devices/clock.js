'use strict';

var clock = {
  uri: 'http://api.lelylan.com/devices/4',
  id: '4',
  name: 'Alarm Clock',
  type: { uri: 'http://api.lelylan.com/types/4', id: '4' },
  categories: ['others'],
  physical: { uri: 'http://arduino.house.com/4' },
  pending: false,
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1', value: 'on', expected: 'on', pending: false,
    accepted: {'on': 'On', 'off': 'Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2', value: 'off', expected: 'off', pending: false,
    accepted: {'on': 'Alarm On', 'off': 'Alarm Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3', value: '00:00', expected: '00:00', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/4',
    id: '4', value: '20', expected: '20', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/5',
    id: '5', value: '3', expected: '3', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/6',
    id: '6', value: '30', expected: '30', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/7',
    id: '7', value: '300', expected: '300', pending: false,
    accepted: null
  }],
  creator_id: '1',
  owner_id: '1',
  created_at: '2012-09-01T16:00:32Z',
  updated_at: '2013-04-10T16:19:20Z',
  updated_from: 'Lelylan Demo'
};

var clockType = {
  uri: 'http://api.lelylan.com/types/4',
  id: '4',
  name: 'Alarm Clock',
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
    name: 'Mode',
    default: 'off',
    accepted: {'on': 'Activated', 'off': 'Deactivated'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3',
    name: 'Alarm Time',
    default: '00:00',
    accepted: null,
    type: 'string'
  }, {
    uri: 'http://api.lelylan.com/properties/4',
    id: '4',
    name: 'Volume',
    default: '20',
    accepted: null,
    type: 'range',
    range: { min: 0, max: 100, step: 1 }
  }, {
    uri: 'http://api.lelylan.com/properties/5',
    id: '5',
    name: 'Alarm repetition',
    default: '3',
    accepted: null,
    type: 'range',
    range: { min: 0, max: 25, step: 1 }
  }, {
    uri: 'http://api.lelylan.com/properties/6',
    id: '6',
    name: 'Alarm duration (seconds)',
    default: '30',
    accepted: null,
    type: 'number'
  }, {
    uri: 'http://api.lelylan.com/properties/7',
    id: '7',
    name: 'Alarm interval (seconds)',
    default: '300',
    accepted: null,
    type: 'number',
  }],
  functions: [{
    uri: 'http://api.lelylan.com/functions/1',
    id: '1',
    name: 'Activate Alarm',
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
    name: 'Deactivate Alarm',
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      expected: 'on'
    }, {
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: 'off'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/3',
    id: '3',
    name: 'Set Alarm Time',
    properties: [{
      uri: 'http://api.lelylan.com/properties/3',
      id: '3',
      expected: null
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/4',
    id: '4',
    name: 'Set Alarm Volume',
    properties: [{
      uri: 'http://api.lelylan.com/properties/4',
      id: '4',
      expected: null
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/5',
    id: '5',
    name: 'Set Alarm Repetition',
    properties: [{
      uri: 'http://api.lelylan.com/properties/5',
      id: '5',
      expected: null
    }, {
      uri: 'http://api.lelylan.com/properties/6',
      id: '6',
      expected: null
    }, {
      uri: 'http://api.lelylan.com/properties/7',
      id: '7',
      expected: null
    }]
  }],
  statuses: [{
    uri: 'http://api.lelylan.com/statuses/1',
    id: '1',
    name: 'Alarm Activated',
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
    name: 'Alarm Deactivated',
    function: { uri: 'http://api.lelylan.com/functions/1', id: '1' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      values: ['off'],
      pending: null,
    }]
  }]
};
