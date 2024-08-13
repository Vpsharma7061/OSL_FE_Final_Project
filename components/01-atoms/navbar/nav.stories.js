import navbar from './nav.twig';
import navbarData from './nav.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/navbar' };

export const twig = () => navbar(navbarData);
