export interface Shot {

    id:string;
    title:string;
    description:string;
    image:string;
    imageSmall:string;
    imageLarge:string;
    htmlUrl:string;
    time:string;
    images: {
        normal:string;
        teaser:string;
        hidpi:string;
    };
    createdAt: string;
}