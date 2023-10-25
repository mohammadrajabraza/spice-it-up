import type { DevRoutes } from 'navigation/types';
import { DevMenu, DevStoryBook } from 'screens';
import { DEV_MENU, DEV_STORY_BOOK } from 'constants/screen-names';

const routes: DevRoutes = {
  [DEV_MENU]: {
    component: DevMenu,
  },
  [DEV_STORY_BOOK]: {
    component: DevStoryBook,
  },
};

export default routes;
