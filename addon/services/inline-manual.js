import Ember from 'ember';

export default Ember.Service.extend({
  _hasInlineManualPlayer() {
    return typeof window.inline_manual_player === 'object';
  },
  activateTopic(topicId) {
    if (this._hasInlineManualPlayer()) {
      window.inline_manual_player.activateTopic(topicId);
    }
  },
  deactivate() {
    if (this._hasInlineManualPlayer()) {
      window.inline_manual_player.deactivate();
    }
  }
});
