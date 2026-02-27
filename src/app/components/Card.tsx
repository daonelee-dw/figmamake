import svgPaths from "../../imports/svg-ic7a6xx30s";
import { Clock, MoreHorizontal, Heart } from "lucide-react";

interface CardProps {
  imageUrl?: string;
  date: string;
  title: string;
  likes: number;
}

export function Card({ imageUrl, date, title, likes }: CardProps) {
  return (
    <article 
      className="group flex flex-col gap-4 p-2 rounded-lg transition-all hover:scale-[1.02]"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border-primary)',
        transition: 'var(--transition-base)',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {/* Card Image */}
      <div 
        className="w-full aspect-[4/3] rounded-md overflow-hidden"
        style={{
          backgroundColor: 'var(--color-bg-tertiary)'
        }}
      >
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-5 px-1">
        {/* Text Content */}
        <div className="flex flex-col gap-1">
          {/* Date */}
          <div className="flex items-center gap-1.5">
            <Clock 
              className="w-4 h-4"
              style={{ color: 'var(--color-text-tertiary)' }}
            />
            <span 
              className="text-mini"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {date}
            </span>
          </div>

          {/* Title */}
          <p 
            className="text-small line-clamp-2"
            style={{ 
              color: 'var(--color-text-primary)',
              lineHeight: 'var(--text-small-line-height)'
            }}
          >
            {title}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button 
            className="p-1 -m-1 transition-all hover:opacity-70"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>

          <div 
            className="flex items-center gap-1.5 px-2 py-1 rounded"
            style={{
              backgroundColor: 'var(--color-bg-tertiary)',
              border: '1px solid var(--color-border-secondary)'
            }}
          >
            <Heart 
              className="w-3 h-3"
              style={{ color: 'var(--color-accent-red)' }}
            />
            <span 
              className="text-micro"
              style={{ 
                color: 'var(--color-text-secondary)',
                fontWeight: 'var(--font-medium)'
              }}
            >
              {likes}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
