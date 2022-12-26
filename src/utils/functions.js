// function for client side pagination
export default function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array?.slice((page_number - 1) * page_size, page_number * page_size)
}

export const isUserLoggedIn = () => {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem("LOGGED_IN")) {
      return true
    } else {
      return false
    }
  }
}

export const axiosConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
}

const isBrowser = typeof window !== "undefined"
