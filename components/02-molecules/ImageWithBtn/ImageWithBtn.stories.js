import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import ImageWithBtn from './ImageWithBtn.twig';
import ImageWithBtnData from './ImageWithBtn.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'molecules/ImageWithBtn',
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  const ImageWithBtnHTML = ImageWithBtn(ImageWithBtnData);

  // Create a container element
  const container = document.createElement('div');
  container.innerHTML = ImageWithBtnHTML;
  document.body.appendChild(container);

  // Initialize Fancybox
  setTimeout(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      loop: true,
    });
  }, 0);

  return container;
};
