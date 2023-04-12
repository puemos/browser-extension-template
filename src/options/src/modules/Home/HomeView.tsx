import React from "react";
import {
  AspectRatio,
  ScrollArea,
  ScrollBar,
  Separator,
} from "@extension/design-system";

interface Album {
  name: string;
  artist: string;
  cover: string;
}

const madeForYouAlbums: Album[] = [
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1598062548091-a6fb6a052562?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1626759486966-c067e3f79982?w=300&dpr=2&q=80",
  },
  {
    name: "Thinking Components",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80",
  },
  {
    name: "Functional Fury",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80",
  },
];

const HomeView = () => {
  return (
    <div className="gap-1 p-1">
      <div className="mt-6 space-y-1">
        <h2 className="text-lg font-semibold tracking-tight">Made for You</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className="flex space-x-4 pb-4">
          {madeForYouAlbums.map((album) => (
            <AlbumArtwork key={album.name} album={album} aspectRatio={1 / 1} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

function AlbumArtwork({
  aspectRatio = 3 / 4,
  album,
}: {
  aspectRatio: number;
  album: Album;
}) {
  return (
    <div className={"space-y-3 w-[150px]"}>
      <AspectRatio ratio={aspectRatio} className="overflow-hidden rounded-md">
        <img
          src={album.cover}
          alt={album.name}
          className="object-cover transition-all hover:scale-105"
        />
      </AspectRatio>
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {album.artist}
        </p>
      </div>
    </div>
  );
}

export default HomeView;
