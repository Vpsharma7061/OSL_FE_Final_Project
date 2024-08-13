import cmpsix from './ci.twig';
import cmpsixData from './ci.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/cmpsix' };

export const HeaderExample = () => cmpsix(cmpsixData);
