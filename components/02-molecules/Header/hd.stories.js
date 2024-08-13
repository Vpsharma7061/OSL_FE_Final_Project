import Header from './hd.twig';
import HeaderData from './hd.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/Header' };

export const HeaderExample = () => Header(HeaderData);
