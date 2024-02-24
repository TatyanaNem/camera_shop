export type TCategoryDescription = 'Видеокамера' | 'Фотоаппарат' | '';

export type TProductCategory = 'photocamera' | 'videocamera';

export const categories: Record<TProductCategory, TCategoryDescription> = {
  videocamera: 'Видеокамера',
  photocamera: 'Фотоаппарат'
};

export type TUnavailableType = 'Моментальная' | 'Плёночная';
