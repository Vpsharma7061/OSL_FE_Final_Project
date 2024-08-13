import ImageWithCard from './ImageWithCard.twig';
import ImageWithCardData from './ImageWithCard.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/ImageWithCard' };

export const HeaderExample = () => ImageWithCard(ImageWithCardData);
