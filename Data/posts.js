import { USERS } from "./users";
export const POSTS = [
  {
    imageUrl:
      "https://img.jakpost.net/c/2020/07/04/2020_07_04_99418_1593844609._large.jpg",
    user: USERS[1].user,
    likes: 7870,
    caption:
      "Badminton puts an instant smile on my face and retirement will never change that.",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "theqazman",
        comment: "Great play...",
      },
      { user: "SainaNehwal", comment: "You are truely the best.. LEGEND" },
    ],
  },
  {
    imageUrl:
      "https://www.teahub.io/photos/full/26-266883_dpz-instagram-wallpaper-girl.jpg",
    user: USERS[2].user,
    likes: 7870,
    caption: "New Beginnings new hopes..",
    profile_picture: USERS[2].image,
    comments: [{ user: "Ahansha", comment: "Beautiful" }],
  },
];
