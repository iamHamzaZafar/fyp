import React, { useState } from 'react';

const DiscussionComponent = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { text: newPost, replies: [] }]);
      setNewPost('');
    }
  };

  const handleAddReply = (index, reply) => {
    const updatedPosts = [...posts];
    updatedPosts[index].replies.push(reply);
    setPosts(updatedPosts);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Discussion Board</h2>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows="3"
          placeholder="Type your query here..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddPost}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Post Query
        </button>
      </div>
      {posts.map((post, index) => (
        <Post key={index} post={post} onAddReply={(reply) => handleAddReply(index, reply)} />
      ))}
    </div>
  );
};

const Post = ({ post, onAddReply }) => {
  const [newReply, setNewReply] = useState('');

  const handleAddReply = () => {
    if (newReply.trim()) {
      onAddReply(newReply);
      setNewReply('');
    }
  };

  return (
    <div className="mb-6 p-4 border rounded bg-gray-100">
      <p className="mb-2">{post.text}</p>
      {post.replies.map((reply, index) => (
        <div key={index} className="ml-4 p-2 border-l-2 border-blue-500">
          <p>{reply}</p>
        </div>
      ))}
      <textarea
        className="w-full p-2 border rounded mt-2"
        rows="2"
        placeholder="Type your reply here..."
        value={newReply}
        onChange={(e) => setNewReply(e.target.value)}
      ></textarea>
      <button
        onClick={handleAddReply}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded mt-2"
      >
        Reply
      </button>
    </div>
  );
};

export default DiscussionComponent;
