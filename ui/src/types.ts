export type IStore<TState, TAction> = {
  state: TState;
  dispatch: React.Dispatch<TAction>;
};

export type PostTypes =
  | "comment"
  | "follow"
  | "like"
  | "link"
  | "location"
  | "post";

export interface IPost {
  id: string;
  type: PostTypes;
  author: {
    id: string;
    name: string;
    pic: string;
    status?: string;
  };
  title?: string;
  content: any;
  image?: string;
}

export type UICellTypes =
  | "audio"
  | "buttons"
  | "field"
  | "hashtags"
  | "icons"
  | "image"
  | "image-gallery"
  | "location"
  | "markdown"
  | "profile"
  | "rating"
  | "table"
  | "text"
  | "video";

export interface IUICell<TType extends UICellTypes, TValue> {
  type: TType;
  value: TValue;
  span?: number;
}

export type AudioCell = IUICell<"audio", string>;
export type ButtonsCell = IUICell<
  "buttons",
  {
    items: { name: string }[];
    align?: "left" | "right";
  }
>;
export type FieldCell = IUICell<"field", { name: string; value: string }>;
export type HashtagsCell = IUICell<"hashtags", { items: string[] }>;
export type IconsCell = IUICell<
  "icons",
  {
    items: {
      name: string;
    }[];
    align?: "left" | "right";
  }
>;
export type ImageCell = IUICell<
  "image",
  {
    src: string;
    alt?: string;
    height?: string;
    width?: string;
    text?: string;
  }
>;
export type ImageGalleryCell = IUICell<
  "image-gallery",
  {
    items: {
      src: string;
      alt?: string;
      height?: string;
      width?: string;
      text?: string;
    }[];
  }
>;
export type LocationCell = IUICell<"location", string>;
export type MarkdownCell = IUICell<"markdown", string>;
export type ProfileCell = IUICell<
  "profile",
  {
    src: string;
    title: string;
    text?: string;
  }
>;
export type RatingCell = IUICell<"rating", { rating: number; max: number }>;
export type TableCell = IUICell<
  "table",
  { columnNames: string[]; rows: { colums: {}[] }[] }
>;
export type TextCell = IUICell<"text", string>;
export type VideoCell = IUICell<"video", string>;

export type UICell =
  | AudioCell
  | ButtonsCell
  | FieldCell
  | HashtagsCell
  | IconsCell
  | ImageCell
  | ImageGalleryCell
  | LocationCell
  | MarkdownCell
  | ProfileCell
  | RatingCell
  | TableCell
  | TextCell
  | VideoCell;

export interface IUIDefinition {
  cells: UICell[];
}
