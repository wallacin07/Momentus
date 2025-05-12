
import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../../baseComponents/button';
import { VideoCard } from './VideoCard';

interface VideoTutorialsRowProps {
  title: string;
  videos: Array<{
    id: string;
    title: string;
    imageUrl: string;
  }>;
}

export const VideoTutorialsRow: FC<VideoTutorialsRowProps> = ({ title, videos }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">{title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft size={18} />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videos.map(video => (
          <VideoCard 
            key={video.id}
            title={video.title}
            imageUrl={video.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
