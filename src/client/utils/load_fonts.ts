interface FontFaceDescriptors {
  display?: string;
  style?: string;
  weight?: string;
  stretch?: string;
  unicodeRange?: string;
  variant?: string;
  featureSettings?: string;
}

interface FontFaceSource {
  family: string;
  source: string;
  descriptors?: FontFaceDescriptors;
}

const FONT_FACE_SOURCES: FontFaceSource[] = [
  {
    family: 'Noto Sarif JP',
    source: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400&display=swap',
    descriptors: {
      display: 'swap',
    },
  },
  {
    family: 'Noto Sarif JP',
    source: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@700&display=swap',
    descriptors: {
      display: 'swap',
      weight: '700',
    },
  },
];

export async function loadFonts() {
  const fonts = await Promise.all(
    FONT_FACE_SOURCES.map((fontFaceSource) => {
      const fontFace = new FontFace(fontFaceSource.family, fontFaceSource.source, fontFaceSource.descriptors);
      document.fonts.add(fontFace);
      return fontFace.load();
    }),
  );
  console.log('Fonts loaded:', fonts);
}
