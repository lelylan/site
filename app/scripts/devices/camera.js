'use strict';

var camera = {
  uri: 'http://api.lelylan.com/devices/5',
  id: '5',
  name: 'IP Camera',
  type: { uri: 'http://api.lelylan.com/types/5', id: '5' },
  categories: ['cameras'],
  physical: { uri: 'http://arduino.house.com/5' },
  pending: false,
  properties: [{
    uri: 'http://api.lelylan.com/properties/0',
    id: '0', value: 'on', expected: 'on', pending: false,
    accepted: {'on': 'On', 'off': 'Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/1',
    id: '1', value: 'on', expected: 'on', pending: false,
    accepted: {'on': 'On', 'off': 'Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/4',
    id: '4', value: '0', expected: '0', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/5',
    id: '5', value: '1', expected: '1', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/6',
    id: '6', value: 'off', expected: 'off', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/7',
    id: '7', value: 'off', expected: 'off', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2', value: 'ftp://example.com/cameras/1', expected: 'ftp://example.com/cameras/1', pending: false,
    accepted: {'on': 'Alarm On', 'off': 'Alarm Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3', value: 'ftp://example.com/snapshots/1', expected: 'ftp://example.com/snapshots/1', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/8',
    id: '8', value: 'user', expected: 'user', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/9',
    id: '9', value: 'secret', expected: 'secret', pending: false,
    accepted: null
  }],
  creator_id: '1',
  owner_id: '1',
  created_at: '2012-09-01T16:00:32Z',
  updated_at: '2013-04-10T16:19:20Z',
  updated_from: 'Lelylan Demo'
};

var cameraType = {
  uri: 'http://api.lelylan.com/types/5',
  id: '5',
  name: 'Camera',
  created_at: '2012-09-01T15:01:22Z',
  updated_at: '2012-09-01T15:01:22Z',
  properties: [{
    uri: 'http://api.lelylan.com/properties/0',
    id: '0',
    name: 'Power',
    default: 'on',
    accepted: {'on': 'On', 'off': 'Off'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/1',
    id: '1',
    name: 'Status',
    default: 'off',
    accepted: {'on': 'On', 'off': 'Off'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/4',
    id: '4',
    name: 'Rotation',
    default: '20',
    accepted: null,
    type: 'range',
    range: { min: 0, max: 360, step: 1 }
  }, {
    uri: 'http://api.lelylan.com/properties/5',
    id: '5',
    name: 'Zoom',
    default: '3',
    accepted: null,
    type: 'range',
    range: { min: 0, max: 10, step: 1 }
  }, {
    uri: 'http://api.lelylan.com/properties/6',
    id: '6',
    name: 'Led',
    default: 'off',
    accepted: {'on': 'Led On', 'off': 'Led Off'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/7',
    id: '7',
    name: 'Snap',
    default: '300',
    accepted: {'on': 'Snap On', 'off': 'Snap Off'},
    type: 'number',
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2',
    name: 'Snapshot URI',
    default: '',
    accepted: null,
    type: 'text',
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3',
    name: 'Video URI',
    default: '',
    accepted: null,
    type: 'text',
  }, {
    uri: 'http://api.lelylan.com/properties/8',
    id: '8',
    name: 'Username',
    default: '',
    accepted: null,
    type: 'text',
  }, {
    uri: 'http://api.lelylan.com/properties/9',
    id: '9',
    name: 'Password',
    default: '',
    accepted: null,
    type: 'text',
  }],
  functions: [{
    uri: 'http://api.lelylan.com/functions/1',
    id: '1',
    name: 'Turn On',
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      expected: 'on'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/2',
    id: '2',
    name: 'Turn Off',
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      expected: 'off'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/6',
    id: '6',
    name: 'Set Leds Off',
    properties: [{
      uri: 'http://api.lelylan.com/properties/6',
      id: '6',
      expected: 'off'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/4',
    id: '4',
    name: 'Set Zoom',
    properties: [{
      uri: 'http://api.lelylan.com/properties/5',
      id: '5',
      expected: null
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/5',
    id: '5',
    name: 'Set Leds On',
    properties: [{
      uri: 'http://api.lelylan.com/properties/6',
      id: '6',
      expected: 'on'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/6',
    id: '6',
    name: 'Set Leds Off',
    properties: [{
      uri: 'http://api.lelylan.com/properties/6',
      id: '6',
      expected: 'off'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/7',
    id: '7',
    name: 'Take a snapshot',
    properties: [{
      uri: 'http://api.lelylan.com/properties/7',
      id: '7',
      expected: 'on'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/8',
    id: '8',
    name: 'Set Credentials',
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: null
    }, {
      uri: 'http://api.lelylan.com/properties/8',
      id: '8',
      expected: null
    }, {
      uri: 'http://api.lelylan.com/properties/9',
      id: '9',
      expected: null
    }]
  }],
  statuses: [{
    uri: 'http://api.lelylan.com/statuses/1',
    id: '1',
    name: 'Recording',
    function: { uri: 'http://api.lelylan.com/functions/2', id: '2' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      values: ['on'],
      pending: null,
    }]
  }, {
    uri: 'http://api.lelylan.com/statuses/2',
    id: '2',
    name: 'Off',
    function: { uri: 'http://api.lelylan.com/functions/1', id: '1' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      values: ['off'],
      pending: null,
    }]
  }]
};
