import { AppRoute, DEFAULT_PAGE } from '../common/const';

export function getPath (path: string) {
  let to: string;
  switch (path) {
    case 'root':
      to = `/catalog/${DEFAULT_PAGE}`;
      break;
    case AppRoute.Catalog:
      to = '/catalog';
      break;
    default:
      to = path;
  }
  return to;
}
