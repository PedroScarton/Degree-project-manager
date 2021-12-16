export const getIdFromPath = (pathname) => {
  const pathSliced = pathname.split('/');
  if (pathSliced.length === 4) {
    return pathSliced[3];
  } else {
    return false;
  }
};
