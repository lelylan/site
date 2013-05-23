'use strict';

var shutter = {
  uri: 'http://api.lelylan.com/devices/8',
  id: '8',
  name: 'Rolling Shutter',
  categories: ['windows'],
  type: { uri: 'http://api.lelylan.com/types/8', id: '8' },
  physical: { uri: 'http://arduino.house.com/8' },
  pending: false,
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1', value: 'on', expected: 'on', pending: false,
    accepted: {'on': 'Power On', 'off': 'Power Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2', value: 'halt', expected: 'halt', pending: false,
    accepted: {'open': 'Open', 'close': 'Close', 'halt': 'Halt'}
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3', value: '0', expected: '0', pending: false,
    accepted: null
  }],
  creator_id: '1',
  owner_id: '1',
  created_at: '2012-09-01T16:00:32Z',
  updated_at: '2013-04-10T16:19:20Z',
  updated_from: 'Lelylan Demo'
};

var shutterType = {
  uri: 'http://api.lelylan.com/types/8',
  id: '8',
  name: 'Rolling Shutter',
  created_at: '2012-09-01T15:01:22Z',
  updated_at: '2012-09-01T15:01:22Z',
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1',
    name: 'Power',
    default: 'idle',
    accepted: {'on': 'On', 'off': 'Off'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2',
    name: 'Status',
    default: 'idle',
    accepted: {'open': 'Opening', 'close': 'Closing', 'halt': 'Halt'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3',
    name: 'Aperture',
    default: '0',
    accepted: null,
    type: 'range',
    range: { min: 0, max: 100, step: 1 }
  }],
  functions: [{
    uri: 'http://api.lelylan.com/functions/1',
    id: '1',
    name: 'Open',
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: 'open'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/2',
    id: '2',
    name: 'Close',
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: 'close'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/3',
    id: '3',
    name: 'Halt',
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: 'halt'
    }]
  }],
  statuses: [{
    uri: 'http://api.lelylan.com/statuses/1',
    id: '1',
    name: 'Opening',
    function: { uri: 'http://api.lelylan.com/functions/2', id: '2' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      values: ['open'],
      pending: null,
    }]
  }, {
    uri: 'http://api.lelylan.com/statuses/2',
    id: '2',
    name: 'Closing',
    function: { uri: 'http://api.lelylan.com/functions/1', id: '1' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      values: ['close'],
      pending: null,
    }]
  }, {
    uri: 'http://api.lelylan.com/statuses/3',
    id: '3',
    name: 'Halt',
    function: { uri: 'http://api.lelylan.com/functions/1', id: '1' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      values: ['halt'],
      pending: null,
    }]
  }]
};
