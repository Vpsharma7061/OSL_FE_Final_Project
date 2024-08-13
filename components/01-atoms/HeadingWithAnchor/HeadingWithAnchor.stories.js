import HeadingWithAnchor from './HeadingWithAnchor.twig';
import HeadingWithAnchorData from './HeadingWithAnchor.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/HeadingWithAnchor' };

export const twig = () => HeadingWithAnchor(HeadingWithAnchorData);
