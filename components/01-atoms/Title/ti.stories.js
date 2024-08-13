import Title from './ti.twig';
import TitleData from './ti.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Title' };

export const twig = () => Title(TitleData);
