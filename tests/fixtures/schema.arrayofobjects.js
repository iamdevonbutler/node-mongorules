const {Types} = require('../../lib');
const {isType} = require('../../lib/utils');

module.exports = {

  // Array item w/ an array of objects as it's value.
  "account.friends": {
    type: Types.array(Types.object),
    default: [],
    minLength: 1,
    maxLength: 2,
  },

  "account.friends.name": {
    type: Types.string,
    required: true,
    notNull: true,
    lowercase: true,
    sanitize: true,
    minLength: 1,
    transform: (value) => {
      return value && isType(value, 'string') ? value + '!' : value;
    },
  },

  // Array item w/ an array of objects as it's value.
  "account.friends.nicknames": {
    type: Types.array(Types.object),
    default: [],
  },

  "account.friends.nicknames.name": {
    type: Types.string,
    required: true
  },

  // Array item w/ an array of objects as it's value.
  "account.friends.nicknames.giver": {
    type: Types.array(Types.object),
    required: true,
  },

  "account.friends.nicknames.giver.name": {
    type: Types.string,
    required: true
  }

};
