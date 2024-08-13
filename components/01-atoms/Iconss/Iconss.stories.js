import Iconss from './Iconss.twig';
import IconssData from './Iconss.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Iconss' };

export const twig = () => Iconss(IconssData);
