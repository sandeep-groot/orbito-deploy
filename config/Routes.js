// const {
//   getServicePageRoute,
//   getServiceDetailPageRoutes,
//   getCaseStudyPageRoutes,
//   getCaseStudyDetailPageRoutes,
//   getArticlePageRoutes,
//   getArticleDetailPageRoutes,
// } = require("./routeBuilders")

// const {
//   //appRoutes,
//   serviceRoute,
//   serviceDetailRoutes,
//   caseStudyRoute,
//   caseStudyDetailRoutes,
//   articleRoute,
//   articleDetailRoutes,
// } = require("./route")

// Declaring  app Routes
// **********************

module.exports = {
  // Application Routes
  // *********************************
  //...appRoutes,

  // // Service and Service Detail Routes
  // // *********************************
  // ...getServicePageRoute(serviceRoute),
  // ...getServiceDetailPageRoutes(serviceDetailRoutes),

  // // *****************************************

  // // Case and Case Detail Routes
  // // ***************************
  // ...getCaseStudyPageRoutes(caseStudyRoute),
  // ...getCaseStudyDetailPageRoutes(caseStudyDetailRoutes),

  // ****************************************

  // Article and Article Detail Routes
  // *********************************

  //...getArticlePageRoutes(articleRoute),
  //...getArticleDetailPageRoutes(articleDetailRoutes),

  // ******************************************

  home: {
    path: `/`,
    component: `src/pages/home.js`,
  },
  about: {
    path: `/about`,
    component: `src/pages/about.js`,
  },
  team: {
    path: `/team`,
    component: `src/pages/team.js`,
  },
  testimonials: {
    path: `/testimonials`,
    component: `src/pages/testimonials.js`,
  },
  faq: {
    path: `/faq`,
    component: `src/pages/faq.js`,
  },
  signIn: {
    path: `/signIn`,
    component: `src/pages/signIn.js`,
  },
  admin: {
    path: `/admin`,
    component: `src/pages/admin.js`,
  },
  article: {
    path: `/blog`,
    component: "src/pages/blog/index.js",
  },
  articleDetail1: {
    path: `/blog/article`,
    component: "src/pages/blogDetails.js",
  },
  caseStudy: {
    path: "/case-study",
    component: "src/pages/case-study/index.js",
  },
  caseDetail1: {
    path: "/case-study/detail-1",
    component: "src/pages/caseDetails.js",
  },

  // services: {
  //   path: "/services",
  //   component: "src/pages/services.js",
  // },
  // web: {
  //   path: "/services/web",
  //   component: "src/pages/servicedetail.js",
  // },
  // graphics: {
  //   path: "/services/graphics",
  //   component: "src/pages/servicedetail.js",
  // },
  // online: {
  //   path: "/services/online",
  //   component: "src/pages/servicedetail.js",
  // },
  // search: {
  //   path: "/services/search",
  //   component: "src/pages/servicedetail.js",
  // },
  // mobile: {
  //   path: "/services/mobile",
  //   component: "src/pages/servicedetail.js",
  // },
  // digital: {
  //   path: "/services/digital",
  //   component: "src/pages/servicedetail.js",
  // },
}
