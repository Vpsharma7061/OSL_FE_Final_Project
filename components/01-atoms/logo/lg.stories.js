import logo from './lg.twig';
import logoData from './lg.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/logo' };

export const twig = () => logo(logoData);
