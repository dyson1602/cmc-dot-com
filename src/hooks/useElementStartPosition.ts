export const useElementStartPosition = (element: string) => {
  const boundingRect = document
    .querySelector(`${element}`)
    ?.getBoundingClientRect();
  return { x: boundingRect?.left, y: boundingRect?.top };
};
