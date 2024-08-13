import Himage from './im.twig';
import HimageData from './im.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Himage' };

export const twig = () => Himage(HimageData);
