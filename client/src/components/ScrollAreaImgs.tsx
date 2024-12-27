import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Props {
  scrollImages: { url: string; description?: string }[];
}

export default function ScrollAreaHorizontalDemo({ scrollImages }: Props) {
  return (
    <ScrollArea className="lg:row-start-2 lg:row-end-5 lg:col-start-2 w-96 whitespace-nowrap rounded-md border">
      <div className="grid grid-flow-col w-max gap-4 p-4">
        {scrollImages.map((object) => (
          <figure
            key={object.url}
            className="shrink-0
          h-full flex flex-col justify-between"
          >
            <div className="overflow-hidden rounded-md flex-grow">
              <img
                src={object.url}
                alt={object.description}
                className="aspect-[3/4] h-full w-fit object-cover"
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
