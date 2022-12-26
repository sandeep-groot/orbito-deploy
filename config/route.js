// Application Routes
// *********************************

const appRoutes = {

}

// Service and Service Detail Routes
// *********************************

const serviceRoute = {
  services: {
    url: `/services`,
    name: "All Services",
  },
}

const serviceDetailRoutes = {
  web: {
    url: `/services/web`,
    name: "Web Development",
  },
  graphics: {
    url: `/services/graphics`,
    name: "Graphic Design",
  },
  video: {
    url: `/services/video`,
    name: "Video Production",
  },
  digital: {
    url: `/services/digital`,
    name: "Digital Marketing",
  },
}

// *****************************************

// Case and Case Detail Routes
// ***************************
const caseStudyRoute = {
  caseStudy: {
    url: `/case-study`,
    name: "Case Studies",
  },
}
const caseStudyDetailRoutes = {
  caseDetail1: {
    url: `/case-study/detail-1`,
    name: "Case Study",
  },
}

// *****************************************

// Article and Article Detail Routes
// *********************************
const articleRoute = {
  article: {
    url: `/blog`,
    name: "Articles",
  },
}

const articleDetailRoutes = {
  articleDetail1: {
    url: `/blog/article`,
    name: "Article 1",
  },
}

module.exports = {
  appRoutes,
  serviceRoute,
  serviceDetailRoutes,
  caseStudyRoute,
  caseStudyDetailRoutes,
  articleRoute,
  articleDetailRoutes,
}
