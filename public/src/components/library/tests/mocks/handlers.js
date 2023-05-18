import { rest } from 'msw';

export const handlers = [
  rest.get(`${process.env.API_URL}/mcpeck/library`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {book_id: 30, genre: "Fiction", image_url: "https://covers.openlibrary.org/b/id/8600816-S.jpg", isbn: "9780451228734", pub_date: "2010-01-01T06:00:00.000Z", title: "Daemon"},
        {book_id: 27, genre: "Children", image_url: "https://covers.openlibrary.org/b/id/8600816-S.jpg", isbn: "9781955947046", pub_date: "2020-12-31T06:00:00.000Z", title: "Periwinkle Smith and the Big Pink Spot"},
        {book_id: 19, genre: "Fiction", image_url: "https://covers.openlibrary.org/b/id/8631334-S.jpg", isbn: "9780733426094", pub_date: "2009-06-29T05:00:00.000Z", title: "Invisible Children's Activist Journal"}
      ])
    )
  }),
  rest.post(`${process.env.API_URL}/mcpeck/library`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),
  rest.get(`${process.env.API_URL}/mcpeck/borrowed`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {book_id: 16, title: 'Cookies: from Parsing to Ovens', genre: 'Cooking', pub_date: '2022-09-01T05:00:00.000Z', isbn: '9000000000004', image_url: "https://c.tadst.com/gfx/600x337/cookies.png"},
        {book_id: 12, title: 'The Swamp Provides', genre: 'Novel', pub_date: '2022-09-01T05:00:00.000Z', isbn: '3210987654321', image_url: "https://bit.ly/3HLq6m1"},
        {book_id: 8, title: 'New Age Potato Smashing', genre: 'Educational', pub_date: '2022-09-01T05:00:00.000Z', isbn: '7777777777777', image_url: "https://cdn.drawception.com/images/panels/2015/5-30/4mHXP2HwaF-12.png"}
      ])
    )
  }),
  rest.get(`${process.env.API_URL}/mcpeck/lent`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {book_id: 5, title: 'How to Build a Basement Eel Pond', genre: 'Home Improvement', pub_date: '2022-09-01T05:00:00.000Z', isbn: '4444444444444', image_url: "https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2022/07/eelguy-7.jpg"},
        {book_id: 4, title: 'The Krabby Patty Secret Formula', genre: 'Cooking', pub_date: '2022-09-01T05:00:00.000Z', isbn: '3333333333333', image_url: "https://bit.ly/3HJNNuX"},
        {book_id: 2, title: 'The Fancy Life of Sqwilliam Fancyson', genre: 'Autobiography', pub_date: '2022-09-01T05:00:00.000Z', isbn: '1111111111111', image_url: "https://i1.sndcdn.com/avatars-000451991661-3mzpc2-t500x500.jpg"}
      ])
    )
  })
];