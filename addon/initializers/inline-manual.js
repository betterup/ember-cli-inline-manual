export function initialize(application) {
  application.inject('route', 'inline-manual', 'service:inline-manual');
  application.inject('router:main', 'inline-manual', 'service:inline-manual');
  application.inject('controller', 'inline-manual', 'service:inline-manual');
  application.inject('component', 'inline-manual', 'service:inline-manual');
}

export default {
  name: 'inline-manual',
  initialize
};
