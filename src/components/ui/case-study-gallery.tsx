import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CaseStudyGalleryProps {
  images: string[];
  title: string;
}

const CaseStudyGallery = ({ images, title }: CaseStudyGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="w-full">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 bg-transparent">
                  <CardContent className="p-0">
                    <img
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      className="w-full h-64 md:h-96 object-fill rounded-lg shadow-elegant cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => openLightbox(image, index)}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 hidden md:flex" />
          <CarouselNext className="right-4 hidden md:flex" />
        </Carousel>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(image, index)}
                className="w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-smooth"
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/50 hover:bg-background/75"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>
            
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75"
                  onClick={() => navigateLightbox('prev')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75"
                  onClick={() => navigateLightbox('next')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
            
            <img
              src={selectedImage}
              alt={`${title} - Full size`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/75 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyGallery;