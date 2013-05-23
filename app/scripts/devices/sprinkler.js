'use strict';

var sprinkler = {
  uri: 'http://api.lelylan.com/devices/9',
  id: '9',
  name: 'Sprinkler System',
  categories: ['gardenings'],
  type: { uri: 'http://api.lelylan.com/types/9', id: '9' },
  physical: { uri: 'http://arduino.house.com/9' },
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
    id: '3', value: '50', expected: '50', pending: false,
    accepted: null
  }],
  creator_id: '1',
  owner_id: '1',
  created_at: '2012-09-01T16:00:32Z',
  updated_at: '2013-04-10T16:19:20Z',
  updated_from: 'Lelylan Demo'
};

var sprinklerType = {
  uri: 'http://api.lelylan.com/types/9',
  id: '9',
  name: 'Sprinkler System',
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
    name: 'Water Aperture',
    default: '50',
    accepted: null,
    type: 'range',
    range: { min: 0, max: 100, step: 1 }
  }],
  functions: [{
    uri: 'http://api.lelylan.com/functions/1',
    id: '1',
    name: 'Activate Sprinkler System',
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
    name: 'Deactivate Sprinkler System',
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
    name: 'Set Water Aperture',
    properties: [{
      uri: 'http://api.lelylan.com/properties/3',
      id: '3',
      expected: null
    }]
  }],
  statuses: [{
    uri: 'http://api.lelylan.com/statuses/1',
    id: '1',
    name: 'Watering',
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
    name: 'Idle',
    function: { uri: 'http://api.lelylan.com/functions/1', id: '1' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      values: ['off'],
      pending: null,
    }]
  }]
};
