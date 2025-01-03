interface CommentProps {
  postId: string;
}

const Comment: React.FC<CommentProps> = ({ postId }) => {
  if (!postId) {
    return <p>Error: postId is required.</p>;
  }

  return (
    <div>
      <h3>Comments for Post ID: {postId}</h3>
    </div>
  );
};

export default Comment;