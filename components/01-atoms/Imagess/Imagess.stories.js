import Imagess from './Imagess.twig';
import ImagessData from './Imagess.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Imagess' };

export const twig = () => Imagess(ImagessData);
