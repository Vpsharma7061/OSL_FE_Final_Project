import Newbutton from './btn.twig';
import NewbuttonData from './btn.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Newbutton' };

export const twig = () => Newbutton(NewbuttonData);
