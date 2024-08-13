import Page01Comp01 from './Page01Comp01.twig';
import Page01Comp01Data from './Page01Comp01.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Page01Comp01' };

export const defaultFancy = () => Page01Comp01(Page01Comp01Data);
