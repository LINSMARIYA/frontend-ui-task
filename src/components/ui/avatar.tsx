import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;

const Avatar = ({ className, ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
);

const AvatarImage = ({ className, ...props }: AvatarImageProps) => (
  <AvatarPrimitive.Image className={cn("aspect-square h-full w-full", className)} {...props} />
);

const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
);

export { Avatar, AvatarImage, AvatarFallback };
