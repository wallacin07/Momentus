
import { FC } from 'react';
import { Play } from 'lucide-react';
import { Badge } from '../../../baseComponents/badge';
import { Card } from '../../../baseComponents/card';

interface VideoCardProps {
  title: string;
  imageUrl: string;
}

export const VideoCard: FC<VideoCardProps> = ({
  title,
  imageUrl,
}) => {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div className="relative h-40">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="rounded-full bg-white p-2 shadow-md">
            <Play className="h-8 w-8 text-primary" />
          </div>
        </div>
        <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white">
          Vídeo
        </Badge>
      </div>
      <div className="p-3">
        <h3 className="font-medium line-clamp-2 text-sm">{title}</h3>
      </div>
    </Card>
  );
};
