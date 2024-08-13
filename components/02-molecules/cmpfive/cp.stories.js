import cmpfive from './cp.twig';
import cmpfiveData from './cp.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/cmpfive' };

export const HeaderExample = () => cmpfive(cmpfiveData);
