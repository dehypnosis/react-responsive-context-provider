import PropTypes from 'prop-types'

export default function withMediaContext(Component) {
  Component.contextTypes = Component.contextTypes || {};
  Component.contextTypes.media = PropTypes.object;
  return Component;
}
