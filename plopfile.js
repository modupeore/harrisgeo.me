import { dateToday } from "./src/helpers/dates"
import { getNewId } from "./src/helpers/blogs"

let id = "replace-me"
const plopStuff = async plop => {
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Blog article title?",
      },
      {
        type: "input",
        name: "description",
        message: "Blog description?",
      },
    ],
    actions: function() {
      var actions = [
        {
          type: "add",
          path: `src/pages/blog/${dateToday()}.md`,
          templateFile: "generate/blog.hbs",
          data: { date: dateToday(), id: id },
        },
      ]
      getNewId().then(r => {
        actions.push({
          type: "modify",
          path: `src/pages/blog/${dateToday()}.md`,
          pattern: /\"replace-me\"/gi,
          template: `"${r}"`,
        })
      })

      return actions
    },
  })
}

module.exports = plopStuff
