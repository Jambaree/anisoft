import type { ImageProps } from "next/image";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

interface ImageWithBlurProps extends Omit<ImageProps, "src"> {
  /**
   * The image source url.
   * Make sure the remote image domain is allowed in next config remote image patterns setting.
   */
  src: string;
}

export async function ImageWithBlur({ src, ...rest }: ImageWithBlurProps) {
  const blurDataURL = await getBase64Image(src);

  return (
    <Image blurDataURL={blurDataURL} placeholder="blur" src={src} {...rest} />
  );
}

export async function getBase64Image(src: string): Promise<string> {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer);

  return base64;
}
