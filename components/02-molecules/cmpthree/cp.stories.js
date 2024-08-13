import cmpthree from './cp.twig';
import cmpthreeData from './cp.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/cmpthree' };

export const HeaderExample = () => cmpthree(cmpthreeData);
