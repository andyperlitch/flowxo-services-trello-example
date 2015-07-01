'use strict';

var config = {
  name: 'New Board',
  slug: 'new_board',
  type: 'poller',
  kind: 'trigger',
  scripts: {
    run: require('./run')
  },
  fields: {
    output: [
      {
        key: 'dateLastView',                                  // '2014-01-02T05:28:49.601Z',
        label: 'dateLastView'
      },
      {
        key: 'id',                                            // '52b7f41694336db468017db1',
        label: 'id'
      },
      {
        key: 'pinned',                                        // false,
        label: 'pinned'
      },
      {
        key: 'invited',                                       // false,
        label: 'invited'
      },
      {
        key: 'url',                                           // 'https://trello.com/b/QbwTDaZU/chad-andy-ori-band',
        label: 'url'
      },
      {
        key: 'idOrganization',                                // null,
        label: 'idOrganization'
      },
      {
        key: 'closed',                                        // false,
        label: 'closed'
      },
      {
        key: 'subscribed',                                    // false,
        label: 'subscribed'
      },
      {
        key: 'dateLastActivity',                              // '2014-01-01T12:39:11.360Z',
        label: 'dateLastActivity'
      },
      {
        key: 'prefs__calendarFeedEnabled',                    // false,
        label: 'prefs__calendarFeedEnabled'
      },
      {
        key: 'prefs__selfJoin',                               // false,
        label: 'prefs__selfJoin'
      },
      {
        key: 'prefs__invitations',                            // 'members',
        label: 'prefs__invitations'
      },
      {
        key: 'prefs__background',                             // 'blue',
        label: 'prefs__background'
      },
      {
        key: 'prefs__cardCovers',                             // true,
        label: 'prefs__cardCovers'
      },
      {
        key: 'prefs__canBeOrg',                               // true,
        label: 'prefs__canBeOrg'
      },
      {
        key: 'prefs__backgroundImage',                        // null,
        label: 'prefs__backgroundImage'
      },
      {
        key: 'prefs__backgroundTile',                         // false,
        label: 'prefs__backgroundTile'
      },
      {
        key: 'prefs__backgroundImageScaled',                  // null,
        label: 'prefs__backgroundImageScaled'
      },
      {
        key: 'prefs__canInvite',                              // true,
        label: 'prefs__canInvite'
      },
      {
        key: 'prefs__voting',                                 // 'disabled',
        label: 'prefs__voting'
      },
      {
        key: 'prefs__comments',                               // 'members',
        label: 'prefs__comments'
      },
      {
        key: 'prefs__canBePublic',                            // true,
        label: 'prefs__canBePublic'
      },
      {
        key: 'prefs__backgroundBrightness',                   // 'unknown',
        label: 'prefs__backgroundBrightness'
      },
      {
        key: 'prefs__canBePrivate',                           // true,
        label: 'prefs__canBePrivate'
      },
      {
        key: 'prefs__backgroundColor',                        // '#0079BF',
        label: 'prefs__backgroundColor'
      },
      {
        key: 'prefs__permissionLevel',                        // 'private',
        label: 'prefs__permissionLevel'
      },
      {
        key: 'prefs__cardAging',                              // 'regular'
        label: 'prefs__cardAging'
      },
      {
        key: 'descData',                                      // null,
        label: 'descData'
      },
      {
        key: 'desc',                                          // '',
        label: 'desc'
      },
      {
        key: 'shortUrl',                                      // 'https://trello.com/b/QbwTDaZU',
        label: 'shortUrl'
      },
      {
        key: 'shortLink',                                     // 'QbwTDaZU',
        label: 'shortLink'
      },
      {
        key: 'name',                                          // 'Chad-Andy-Ori-Band',
        label: 'name'
      },
      {
        key: 'starred',                                       // false
        label: 'starred'
      }
    ]
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};