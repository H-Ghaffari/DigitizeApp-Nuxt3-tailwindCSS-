//https://stackoverflow.com/questions/74688433/why-loading-dynamically-assets-fails-on-nuxt-v3
const glob = import.meta.glob("~/assets/images/*", {
  eager: true,
});

const getImageAbsolutePath = (imageName) => {
  return glob[`/assets/images/${imageName}`]["default"];
};

export default getImageAbsolutePath;
