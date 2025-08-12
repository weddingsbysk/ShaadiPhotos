import type { Wedding } from '../types';

// Helper function to generate image paths for a wedding folder
const generateImagePaths = (folderName: string, imageCount: number): string[] => {
  return Array.from({ length: imageCount }, (_, i) => 
    `/weddings/${folderName}/image-${i + 1}.jpg`
  );
};

const getCoverImage = (folderName: string): string => {
  return `/weddings/${folderName}/cover.jpg`;
};

export const weddings: Wedding[] = [
  {
    id: 'garhima-ankur',
    title: 'Garden Romance',
    couple: 'Garhima & Ankur',
    date: 'February 8, 2025',
    location: 'Sanskriti Greens, Faridabad',
    coverImage: getCoverImage('garhima-ankur'),
    images: generateImagePaths('garhima-ankur', 10),
    description: 'A dreamy garden wedding filled with natural beauty and romantic moments.'
  },
  {
    id: 'ayushi-kunal',
    title: 'Cultural Celebration',
    couple: 'Ayushi & Kunal',
    date: 'February 14, 2025',
    location: 'Mishtten Club, Kota',
    coverImage: getCoverImage('ayushi-kunal'),
    images: generateImagePaths('ayushi-kunal', 10),
    description: 'A vibrant celebration of love, tradition, and cultural heritage.'
  },
  {
    id: 'anusha-rohit',
    title: 'Seaside Elegance',
    couple: 'Anusha & Rohit',
    date: 'March 29, 2025',
    location: 'La Cabana, Goa',
    coverImage: getCoverImage('anusha-rohit'),
    images: generateImagePaths('anusha-rohit', 10),
    description: 'An elegant beachside ceremony with stunning ocean views.'
  },
  {
    id: 'anukriti-gaurav',
    title: 'Mountain Bliss',
    couple: 'Anukriti & Gaurav',
    date: 'March 3, 2025',
    location: 'Evara Resort, Corbett',
    coverImage: getCoverImage('anukriti-gaurav'),
    images: generateImagePaths('anukriti-gaurav', 10),
    description: 'A breathtaking mountain wedding surrounded by nature\'s grandeur.'
  }
];