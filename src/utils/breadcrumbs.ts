import { AppRoute } from '../common/const';

export function getPath (path: string) {
  let to: string;
  switch (path) {
    case 'root':
      to = '/catalog';
      break;
    case AppRoute.Catalog:
      to = '/catalog';
      break;
    default:
      to = path;
  }
  return to;
}
