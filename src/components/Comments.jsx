import React, { useState, useEffect } from 'react'
import "./Comments.css"

function Comments() {
  const [comments, setComments] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
        const newComment = e.target.comment.value;
        addComment(newComment);
        e.target.comment.value = "";
  }

  const addComment = (newComment) => {
    // Make POST request to localhost:8001/comments
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newComment, likes: 0 }),
    })
      .then((response) => response.json())
      .then((newCommentFromServer) => {
        // Update state with the new comment from the server
        setComments([...comments, newCommentFromServer]);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  // Function to handle liking a comment
  const likeComment = (index) => {
    const updatedComments = [...comments];
    const updatedComment = { ...updatedComments[index] };
    updatedComment.likes += 1;
    updatedComments[index] = updatedComment;

    // Make PATCH request to update likes on the server
    fetch(`http://localhost:3000/comments/${updatedComment.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: updatedComment.likes }),
  })
    .then((response) => response.json())
    .then(() => {
      // Update state with the updated comment from the server
      setComments(updatedComments);
    })
    .catch((error) => {
      console.error("Error updating likes:", error);
    });
  };

  // Load comments from the server on component mount
  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((commentsFromServer) => {
        setComments(commentsFromServer);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  return (
    <div id='commentContainer'><h3>Leave a Comment</h3>
    <form onSubmit={handleSubmit}>
      <textarea name="comment" placeholder="Type your comment here..." required />
      <button type="submit">Submit</button>
    </form>

    
    <div className="comments-section">
    <h4>Comments</h4>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p>{comment.text}</p>
          <div className="like-section">
            {/* <span>{comment.likes} likes</span> */}
            <button onClick={() => likeComment(index)}>👍 Like {comment.likes}</button>
          </div>
        </div>
      ))}
    </div></div>
  )
}

export default Comments