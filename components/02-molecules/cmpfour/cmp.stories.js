import cmpfour from './cmp.twig';
import cmpfourData from './cmp.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/cmpfour' };

export const HeaderExample = () => cmpfour(cmpfourData);
