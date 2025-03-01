export const getOptimizedImageUrl = (src: string) => {
  if (!src.includes("imagekit.io")) return src; // Ensure it's an ImageKit URL

  if (window.innerWidth < 500) {
    return src.replace("/portfolio/", "/tr:w-512,h-640/portfolio/"); // 128, 160
  }

  return src;
};
