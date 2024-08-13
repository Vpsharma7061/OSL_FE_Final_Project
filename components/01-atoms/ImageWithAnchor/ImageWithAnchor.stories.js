import ImageWithAnchor from './ImageWithAnchor.twig';
import ImageWithAnchorData from './ImageWithAnchor.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/ImageWithAnchor' };

export const twig = () => ImageWithAnchor(ImageWithAnchorData);
