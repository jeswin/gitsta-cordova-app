import { IPost } from "../../types";

export const feed: IPost[] = [
  {
    id: "id3",
    type: "post",
    author: {
      id: "jeswin",
      name: "Boom Shanker",
      pic: "/dev/img/feed1/profile1.jpg"
    },
    content: `
      And there's a fire there but the mood moves like a switch.
      On the back end of a back road, but the
      black end of this match burns and it's gone.
    `,
    image: "/dev/img/feed1/image3.jpg"
  },
  {
    id: "id1",
    type: "post",
    author: {
      id: "jeswin",
      name: "Boom Shanker",
      pic: "/dev/img/feed1/profile1.jpg",
      status: "Man's reach exceeds his imagination!"
    },
    content: `
      I've got a new low, all 52 cards in a row.
    `,
    image: "/dev/img/feed1/image1.jpg"
  },
  {
    id: "id2",
    type: "post",
    author: {
      id: "jeswin",
      name: "Boom Shanker",
      pic: "/dev/img/feed1/profile1.jpg"
    },
    content: `
      Well I did my time, in the window of this box.
      Like it or not, all I got now is today.
      Tomorrow ain't here and yesterday is gone dead on me anyway.
    `,
    image: "/dev/img/feed1/image2.jpg"
  }
];
