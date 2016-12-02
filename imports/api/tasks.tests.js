/ * eslint-env mocha */

import { Meteor } from 'meteor/meteor';

if ( Meteor.isServer) {
    describe ('Tasks', () => {
        decribe('methods', () => {
            it('can delete owned task', () => {
            });
        });
    });
}
