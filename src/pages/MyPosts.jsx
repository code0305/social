
import React, { useEffect, useState } from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comment from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MyPosts = () => {
  
  const{myPost,deletePost}=useContext(UserContext)
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const res = await myPost()

        if (res.data.success) {
          console.log(res.data.data)
          setPost(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyPosts();
  }, []);


const [currentImageIndex, setCurrentImageIndex] = useState({});
    const handleImageClick = (postId, mediaLength) => {
  setCurrentImageIndex((prev) => ({
    ...prev,
    [postId]: ((prev[postId] || 0) + 1) % mediaLength
  }));
};

return (
  <div style={{ padding: "20px" }}>

    {post.length === 0 ? (
      <p style={{ textAlign: "center" }}>No posts available...</p>
    ) : (

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px"
        }}
      >

        {post.map((item) => (
          <Card key={item._id} sx={{ width: "100%" }}>
            
            {/* Header */}
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }}>
                  {item.userId?.name?.charAt(0) || "U"}
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userId?.name || "Unknown User"}
              subheader={new Date(item.createdAt).toLocaleDateString()}
            />

            {/* Image */}
            {item.media?.length > 0 && (
              <CardMedia
                component="img"
                height="200"
                image={item.media[currentImageIndex[item._id] || 0].mediaUrl}
                alt="post"
                onClick={() =>
                  handleImageClick(item._id, item.media.length)
                }
                sx={{ cursor: "pointer" }}
              />
            )}

            {/* Content */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.caption}
              </Typography>
            </CardContent>

            {/* Actions */}
            <CardActions>
              <IconButton >
                <FavoriteIcon />
                <span>{item.likes?.length || 0}</span>
              </IconButton>

              <IconButton>
                <Comment />
                <span>{item.comments?.length || 0}</span>
              </IconButton>

              <button
                onClick={() =>  deletePost(item._id)}
                style={{
                  marginLeft: "auto",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </CardActions>

          </Card>
        ))}

      </div>
    )}
  </div>
);
}
export default MyPosts;