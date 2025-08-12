# Wedding Photo Collections

This directory contains wedding photo collections organized by couple. Each wedding has its own folder with the following structure:

## Folder Structure
```
public/weddings/
├── sarah-james/
│   ├── cover.jpg (main cover image)
│   ├── image-1.jpg
│   ├── image-2.jpg
│   └── ... (up to image-12.jpg)
├── priya-raj/
│   ├── cover.jpg
│   ├── image-1.jpg
│   └── ... (up to image-15.jpg)
├── emma-david/
│   ├── cover.jpg
│   ├── image-1.jpg
│   └── ... (up to image-10.jpg)
└── lisa-michael/
    ├── cover.jpg
    ├── image-1.jpg
    └── ... (up to image-14.jpg)
```

## Adding New Weddings

1. Create a new folder in `public/weddings/` with the couple's names (e.g., `john-jane`)
2. Add a `cover.jpg` file for the main wedding card image
3. Add numbered images: `image-1.jpg`, `image-2.jpg`, etc.
4. Update `src/data/weddings.ts` to include the new wedding data:
   ```typescript
   {
     id: 'john-jane',
     title: 'Wedding Title',
     couple: 'John & Jane',
     date: 'Month Day, Year',
     location: 'Venue, City',
     coverImage: getCoverImage('john-jane'),
     images: generateImagePaths('john-jane', imageCount),
     description: 'Wedding description...'
   }
   ```

## Image Requirements

- **Format**: JPG or PNG
- **Cover Image**: Recommended size 800x600px (4:3 aspect ratio)
- **Gallery Images**: Recommended minimum width 1200px for best quality
- **File Size**: Optimize images for web (under 500KB each recommended)
- **Naming**: Use sequential numbering: `image-1.jpg`, `image-2.jpg`, etc.

## Technical Notes

- Images are served from the `public/weddings/` directory
- Paths in code use `/weddings/{folder-name}/` format
- The site automatically handles image loading and lightbox functionality
- All images currently use the same source image for demonstration