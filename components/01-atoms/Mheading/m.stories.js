import Mheading from './m.twig';
import MheadingData from './m.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Mheading' };

export const twig = () => Mheading(MheadingData);
