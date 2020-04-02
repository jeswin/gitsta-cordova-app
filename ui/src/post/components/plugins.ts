import * as comment from "./plugins/comment";
import * as follow from "./plugins/follow";
import * as like from "./plugins/like";
import * as link from "./plugins/link";
import * as location from "./plugins/location";
import * as post from "./plugins/post";
import { IUIDefinition, PostTypes, IPost } from "../../types";

export interface IPlugin {
  render: (post: IPost) => Promise<IUIDefinition>;
}

const plugins: Record<PostTypes, IPlugin | undefined> = {
  comment,
  follow,
  like,
  link,
  location,
  post
};

export async function run(post: IPost): Promise<IUIDefinition | undefined> {
  const plugin = plugins[post.type as PostTypes];
  return await plugin?.render(post);
}
