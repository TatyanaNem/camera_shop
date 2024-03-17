export const getCategory = (cameraCategory: string) => {
  if (cameraCategory === 'Фотоаппарат') {
    cameraCategory = 'Фотокамера';
  }
  return cameraCategory;
};
