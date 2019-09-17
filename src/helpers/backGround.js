import webpIsSupported from "./webp";

const BackGround = () => {
  return webpIsSupported() ? 'webp': 'jpeg';
};

export default BackGround;
