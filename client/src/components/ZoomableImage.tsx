// import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
// import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

// interface ZoomableImageProps
//   extends DetailedHTMLProps<
//     ImgHTMLAttributes<HTMLImageElement>,
//     HTMLImageElement
//   > {
//   src: string;
//   alt?: string;
//   className?: string;
// }

// export default function ZoomableImage({
//   src,
//   alt,
//   className,
// }: ZoomableImageProps) {
//   if (!src) return null;

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <img
//           src={src}
//           alt={alt || ""}
//           className={className}
//           style={{
//             width: "100%",
//             height: "auto",
//           }}
//         />
//       </DialogTrigger>

//       <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
//         <div className="relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md">
//           <img
//             src={src}
//             alt={alt || ""}
//             className="h-full w-full object-contain"
//             style={{
//               maxHeight: "80vh",
//               maxWidth: "80vw",
//             }}
//           />
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
