export const useElementStartPosition = (element: string) => {
  const boundingRect = document
    .querySelector(`${element}`)
    ?.getBoundingClientRect();
    console.log(`${element} rect: `,boundingRect?.y)
  return boundingRect ? { x: boundingRect.x, y: boundingRect.y } : undefined;
};
