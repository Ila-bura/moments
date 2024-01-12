import { rest } from "msw";

const baseURL = "https://api-project-ila-f8d6f876a2c2.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 7,
        "username": "Glenda1",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 7,
        "profile_image": "https://res.cloudinary.com/ilabura/image/upload/v1/media/../default_profile_ypaagm"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];