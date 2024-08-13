import Page01comp02 from './Page01comp02.twig';
import Page01comp02Data from './Page01comp02.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Page01comp02' };

export const defaultFancy = () => Page01comp02(Page01comp02Data);
