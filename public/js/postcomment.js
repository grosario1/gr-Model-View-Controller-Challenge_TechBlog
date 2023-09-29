document.addEventListener('DOMContentLoaded', () => {
	// Post Comment
	const commentFormHandler = async (event) => {
	  event.preventDefault();
  
	  const comment = document.querySelector('#comment').value.trim();
	  const post_id = document.querySelector('#postId').value;
  
	  const response = await fetch('/api/comment', {
		method: 'POST',
		body: JSON.stringify({ comment, post_id }),
		headers: { 'Content-Type': 'application/json' },
	  });
  
	  if (response.ok) {
		document.location.reload();
	  } else {
		alert('Failed to add a comment');
	  }
	};
  
	// Attach the event listener to the button
	const submitBtn = document.querySelector('#submitBtn');
	if (submitBtn) {
	  submitBtn.addEventListener('click', commentFormHandler);
	}
  });
  