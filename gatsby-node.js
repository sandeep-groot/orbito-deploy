const path = require("path")
const { default: axios } = require("axios")

// const { GetBlogsAPI } = require("./src/node-api/blogs")

exports.createPages = async ({ page, actions }) => {
  const { createPage } = actions

  await axios
    .get("http://orbitoqa.grootsoftwares.com:5000/api/blog")
    .then(res => {
      res?.data.map((blog, index, arrCopy) => {
        let slug = blog?.slug
        return createPage({
          path: `/blog/${slug}/`,
          component: path.resolve("./src/pages/blogDetails.js"),
          context: { blog },
        })
      })
    })

  // Check if the page is a localized 404

  // createPage({
  //   path: "/",
  //   component: require.resolve("./src/pages/home.js"),
  //   context: {},
  //   defer: true,
  // })

  const services = [
    {
      path: "/services/web",
      heading: "Web Development",
      component: "src/pages/servicedetail.js",
    },
    {
      path: "/services/graphics",
      heading: "Graphic Design",
      component: "src/pages/servicedetail.js",
    },
    {
      path: "/services/online",
      heading: "Online Security",
      component: "src/pages/servicedetail.js",
    },
    {
      path: "/services/search",
      heading: "Search Engine Optimization",
      component: "src/pages/servicedetail.js",
    },
    {
      path: "/services/mobile",
      heading: "Mobile App Development",
      component: "src/pages/servicedetail.js",
    },
    {
      path: "/services/digital",
      heading: "Digital Marketing",
      component: "src/pages/servicedetail.js",
    },
  ]

  services.map(service => {
    return createPage({
      path: service.path,
      component: path.resolve("src/pages/servicedetail.js"),
      context: { heading: service?.heading },
    })
  })

  // services.map(service => {
  //   return  createPage({
  //       path:service.path + "/",
  //       component:path.resolve("src/pages/servicedetail.js")
  //     })
  //   })

  // if (page.path.match(/signIn/)) {
  //   page.context.layout = "admin_layout"
  //   createPage(page)
  // }
}
