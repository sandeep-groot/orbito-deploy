const getServicePageRoute = routes => {
  let _routes = {}
  for (const property in routes) {
    _routes = {
      ..._routes,
      [property]: {
        path: `${routes[property]?.url}`,
        component: `src/pages/services.js`,
      },
    }
  }

  return _routes
}

const getServiceDetailPageRoutes = routes => {
  let _routes = {}
  for (const property in routes) {
    _routes = {
      ..._routes,
      [property]: {
        path: `${routes[property]?.url}`,
        component: `src/pages/servicedetail.js`,
      },
    }
  }

  return _routes
}

const getCaseStudyPageRoutes = routes => {
  let _routes = {}
  for (const property in routes) {
    _routes = {
      ..._routes,
      [property]: {
        path: `${routes[property]?.url}`,
        component: `src/pages/case-study/index.js`,
      },
    }
  }

  return _routes
}

const getCaseStudyDetailPageRoutes = routes => {
  let _routes = {}
  for (const property in routes) {
    _routes = {
      ..._routes,
      [property]: {
        path: `${routes[property]?.url}`,
        component: `src/pages/caseDetails.js`,
      },
    }
  }

  return _routes
}

const getArticlePageRoutes = routes => {
  let _routes = {}
  for (const property in routes) {
    _routes = {
      ..._routes,
      [property]: {
        path: `${routes[property]?.url}`,
        component: `src/pages/blog/index.js`,
      },
    }
  }

  return _routes
}

const getArticleDetailPageRoutes = routes => {
  let _routes = {}
  for (const property in routes) {
    _routes = {
      ..._routes,
      [property]: {
        path: `${routes[property]?.url}`,
        component: `src/pages/blogDetails.js`,
      },
    }
  }

  return _routes
}

module.exports = {
  getServicePageRoute,
  getServiceDetailPageRoutes,
  getCaseStudyPageRoutes,
  getCaseStudyDetailPageRoutes,
  getArticlePageRoutes,
  getArticleDetailPageRoutes,
}
