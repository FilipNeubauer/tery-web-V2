export const getOptimizedImageUrl = (src: string) => {
  if (window.innerWidth < 500) {
    return (
      src.replace("/object/public/", "/render/image/public/") +
      "?width=128&height=160&resize=contain&quality=80"
    );
  }
  return src;
};
