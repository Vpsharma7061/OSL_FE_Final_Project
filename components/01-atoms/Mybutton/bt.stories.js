import Mybutton from './bt.twig';
import MybuttonData from './bt.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Mybutton' };

export const twig = () => Mybutton(MybuttonData);
