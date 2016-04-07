# ember-cli-inline-manual

This ember-cli addon injects inline manual into your ember app.

The inline manual javascript is injected into the app's index.html. This addon also comes with a service for the inline manual player.

More on inline manual: <https://inlinemanual.com/>

## Installation

```
ember install ember-cli-inline-manual
```

## Configuration
This addon uses the ember-cli's configuration as defined in `config/environment.js`.

Add your site token to `config/environment.js` as seen in the example below:

```
//environment.js
  ENV['inlineManual'] = {
    enabled: true,
    token: 123456789
  };
```

### Configuration Parameters
* `enabled` (Default: `false`): Enable inline manual
* `token` (Default: `null`): Mandatory for inline manual site token

## Inline Manual Service Usage
The service can be injected anywhere that inline manual will be used.

```
import Ember from 'ember';

export default Ember.Component.extend({
  inlineManual: Ember.inject.service(),
  showTutorial() {
  	this.get('inlineManual').activateTopic(999999);
  }
});

```

## Inline Manual API
### activateTopic
`activateTopic(topicId)`
Alias of inline manual activateTopic function
### deactivate
`deactivate`
Alias of inline manual deactivate function