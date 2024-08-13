import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import 'animate.css/animate.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WOW from 'wow.js';
import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';
import '../components/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './_drupal.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

window.jQuery = $;
window.$ = $;

export const decorators = [
  (Story, { args }) => {
    const { renderAs } = args || {};

    useEffect(() => {
      Drupal.attachBehaviors();
    }, [args]);
    return Story();
  },
];

setupTwig(Twig);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Slick Slider on the carousel-inner
  $('#hero-carousel .carousel-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: '#hero-carousel .carousel-control-prev',
    nextArrow: '#hero-carousel .carousel-control-next',
    dots: true,
    appendDots: '#hero-carousel .carousel-indicators',
  });

  // Initialize WOW.js
  if (typeof window !== 'undefined') {
    new WOW().init();
  }

  // Handle card hover animations
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.classList.add('animate__animated', 'animate__zoomIn');
    });

    card.addEventListener('animationend', () => {
      card.classList.remove('animate__animated', 'animate__zoomIn');
    });
  });
});
