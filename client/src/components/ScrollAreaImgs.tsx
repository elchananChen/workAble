import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Props {
  scrollImages: { url: string; description?: string }[];
}

export default function ScrollAreaHorizontalDemo({ scrollImages }: Props) {
  return (
    <ScrollArea className="row-start-1 row-end-3 col-start-2 w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {scrollImages.map((object) => (
          <figure key={object.url} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={object.url}
                alt={object.description}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {object.description}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
