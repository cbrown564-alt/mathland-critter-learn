
import { cn } from "@/lib/utils";

interface CharacterAvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20"
};

export const CharacterAvatar = ({ src, alt, size = "md", className }: CharacterAvatarProps) => {
  return (
    <div className={cn(
      "rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0",
      sizeClasses[size],
      className
    )}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
