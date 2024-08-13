import Header from './Header.twig';
import HeaderData from './Header.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Header' };

export const twig = () => Header(HeaderData);
