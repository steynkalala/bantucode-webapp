// const dev = process.env.NEXT_PUBLIC_API;
// const prod = process.env.NEXT_PUBLIC_API_PROD_DOMAIN;

// const api = process.env.NODE_ENV === "development" ? dev : prod;
// async function getBlogData() {
//   const res = await fetch(`${api}blog`, {
//     cache: "no-cache",
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function sitemap() {
  // const blogPost = await getBlogData();

  // let blogs = blogPost?.data?.blogs.map((post) => ({
  //   url: `https://www.esdantis.com/esdantis-blog/${post.slug}`,
  //   // lastModified: post.metadata.publishedAt,
  // }));

  let routes = [
    "",
    // "/explore",
    // "/about-esdantis",
    // "/who-can-sell",
    // // "/categories",
    // "/esdantis-blog",
    // "/sell-on-esdantis",
    // "/how-it-works",
    // // "/pricing",
    // "/contact",
  ].map((route) => ({
    url: `https://www.bantucode.org${route}`,
    // lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
  // return [...routes, ...blogs];
}
