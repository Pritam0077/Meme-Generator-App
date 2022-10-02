export interface IMemeTextTypes {
  topText: string;
  bottomText: string;
}

export interface ISelectedMemeTypes extends Partial<IMemeTextTypes> {
  randomImage: string;
  name: string;
}

export interface IMemeObjectTypes {
  id: string;
  name: string;
  url: string;
  height: number;
  widht: number;
  box_count: number;
}
