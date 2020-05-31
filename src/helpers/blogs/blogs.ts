import fs from "fs";

/**
 * Get all the existing blogs
 * @returns {Promise[string]} blog names
 */
export const getBlogs = () => {
  const path = "src/pages/blog";

  return new Promise(function (resolve, reject) {
    fs.readdir(path, function (err, filenames) {
      if (err) reject(err);
      else {
        resolve(filenames);
      }
    });
  });
};

/**
 * Get the latest blog id
 * @returns {number} latest id
 */
export const getLatestId = async () => {
  const latestId = await getBlogs().then((blogs: string[]) => {
    return blogs.length;
  });
  return Number(latestId);
};

/**
 * Get the new blog id
 * @returns {number} id
 */
export const getNewId = async () => {
  const latestId = await getLatestId();

  return Number(latestId) + 1;
};
