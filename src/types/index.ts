export interface Wedding {
  id: string;
  title: string;
  couple: string;
  date: string;
  location: string;
  coverImage: string;
  images: string[];
  description: string;
}

export interface PhotoGalleryProps {
  wedding: Wedding;
  onClose: () => void;
}