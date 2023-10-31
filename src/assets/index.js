// backgrounds
import silverCanyon from './background/bud.gif';
import sunlightCanyon from './background/fig.gif';
import template from './background/eoaalien.gif';
import volcanicRock from './background/saiman.gif';


import blackAngel from './cards/Black_Angel.png';
import destroyer from './cards/Destroyer.png';
import explosions from './cards/Explosion.png';
import pingPong from './cards/Ping_Pong.png';
import leoClaim from './cards/Leo_Claim.png';
import dirtyCabs from './cards/Dirty_Cabs.png';

// logo
import logoHeader from './lgHeader.png'
import logo from './Logo.png';

// icon
import attack from './attack.png';
import defense from './defense.png';
import alertIcon from './alertIcon.svg';
import AlertIcon from './AlertIcon.jsx';

// players
import player01 from './player01.jpg';
import player02 from './player02.jpg';

// sounds
import attackSound from './sounds/attack.wav';
import defenseSound from './sounds/defense.mp3';
import explosion from './sounds/explosion.mp3';
import theme from "./sounds/theme.mp3";
import click from "./sounds/click.mp3";
import join from "./sounds/join.mp3";
import bg from "./sounds/bg.mp3";
export const allCards = [
  blackAngel,
  destroyer,
  explosions,
  pingPong,
  leoClaim,
  dirtyCabs,
];

export {
  silverCanyon,
  sunlightCanyon,
  template,
  volcanicRock,
  bg,
  join,
  click,
  theme,
  blackAngel,
  destroyer,
  explosions,
  pingPong,
  leoClaim,
  dirtyCabs,
  logoHeader,
  logo,
  attack,
  defense,
  alertIcon,
  AlertIcon,
  player01,
  player02,
  attackSound,
  defenseSound,
  explosion,
};

export const battlegrounds = [
  { id: 'bg-silverCanyon', image: silverCanyon, name: 'Buda' },
  { id: 'bg-sunlightCanyon', image: sunlightCanyon, name: 'Fight' },
  { id: 'bg-template', image: template, name: 'Night' },
  { id: 'bg-volcanicRock', image: volcanicRock, name: 'Autumn' },
];

export const gameRules = [
  'Card with the same defense and attack point will cancel each other out.',
  'Attack points from the attacking card will deduct the opposing player’s health points.',
  'If P1 does not defend, their health wil be deducted by P2’s attack.',
  'If P1 defends, P2’s attack is equal to P2’s attack - P1’s defense.',
  'If a player defends, they refill 3 Mana',
  'If a player attacks, they spend 3 Mana',
];
