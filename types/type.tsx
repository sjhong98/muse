export interface resType {
    primaryImageSmall: string,
    title: string,
    city: string,
    artistDisplayBio: string,
    artistDisplayName: string,
    country: string,
    dimensions: string,
    medium: string,
    objectName: string,
    objectURL: string,
    repository: string,
    objectID: number,
  }

export interface categoryType {
    id:string,
    category: number
}

export const categries = [
    {category:1, id:"American Decorative Arts"},
    {category:3, id:"Ancient Near Eastern Art"},
    {category:4, id:"Arms and Armor"},
    {category:5, id:"Arts of Africa, Oceania, and the Americas"},
    {category:6, id:"Asian Art"},
    {category:7, id:"The Cloisters"},
    {category:8, id:"The Costume Institute"},
    {category:9, id:"Drawings and Prints"},
    {category:10, id:"Egyptian Art"},
    {category:11, id:"European Paintings"},
    {category:12, id:"European Sculpture and Decorative Arts"},
    {category:13, id:"Greek and Roman Art"},
    {category:14, id:"Islamic Art"},
    {category:15, id:"The Robert Lehman Collection"},
    {category:16, id:"The Libraries"},
    {category:17, id:"Medieval Art"},
    {category:18, id:"Musical Instruments"},
    {category:19, id:"Photographs"},
    {category:21, id:"Modern Art"},
]