const Comment = ({name, content}) => {
  const commentsDiv = document.getElementById("comments-div")
  const commentBody = (
    `<div class="comment">
      <h3${name} says:</h3>
      <p>${content}</p>
    </div>`
    )
  const render = () => commentsDiv.insertAdjacentHTML("afterbegin", commentBody)
  return {
    render
  }
}

export default Comment
