import cmptwo from './cm.twig';
import cmptwoData from './cm.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/cmptwo' };

export const HeaderExample = () => cmptwo(cmptwoData);
