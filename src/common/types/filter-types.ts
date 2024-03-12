import { CameraType } from '../const';

export type TCategoryDescription = 'Фотокамера' | 'Видеокамера' | '';

export type TProductCategory = 'photocamera' | 'videocamera';

export const categories: Record<TProductCategory, TCategoryDescription> = {
  photocamera: 'Фотокамера',
  videocamera: 'Видеокамера'
};

export type TUnavailableType = CameraType.Film | CameraType.Snapshot;
