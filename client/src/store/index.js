import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#000',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './shirtify.png',
    fullDecal: './tiger-stripes.jpg',
});

export default state;