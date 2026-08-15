import type { TranslationSchema } from './translationSchema';

import mainMenu from './crh/mainMenu';
import gameBoard from './crh/gameBoard';
import gameControls from './crh/gameControls';
import controlsPage from './crh/controlsPage';
import modal from './crh/modal';
import settings from './crh/settings';
import rulesPage from './crh/rulesPage';
import voiceSettings from './crh/voiceSettings';
import onlineMenu from './crh/onlineMenu';
import waitingForPlayer from './crh/waitingForPlayer';
import joinRoom from './crh/joinRoom';
import localGame from './crh/localGame';
import speech from './crh/speech';
import ui from './crh/ui';
import tooltips from './crh/tooltips';
import supportersPage from './crh/supportersPage';
import replay from './crh/replay';
import faq from './crh/faq';
import gameModes from './crh/gameModes';
import newWidget from './crh/newWidget';
import updateNotification from './crh/updateNotification';
import common from './crh/common';
import testMode from './crh/testMode';
import dndTest from './crh/dndTest';

import trainingHelp from './crh/trainingHelp';
import rewards from './crh/rewards';
import platform from './crh/platform';

const translations: TranslationSchema = {
  dndTest,
  testMode,
  common,
  updateNotification,
  mainMenu,
  gameBoard,
  gameControls,
  controlsPage,
  modal,
  settings,
  rulesPage,
  voiceSettings,
  onlineMenu,
  waitingForPlayer,
  joinRoom,
  localGame,
  speech,
  ui,
  tooltips,
  supportersPage,
  replay,
  faq,
  gameModes,
  newWidget,
  trainingHelp,
  rewards,
  platform
};

export default translations;
