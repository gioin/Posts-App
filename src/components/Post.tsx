import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import DotBtn from './DotBtn';
import { entriePost } from '../types';

const Post = ({ post, index }: entriePost) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="dot-header">
          <Card.Title>{post.title}</Card.Title>
          <DotBtn post={post} />
        </div>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
      <Card.Img variant="top" src={`https://picsum.photos/50${index}/240`} />
    </Card>
  );
};

export default Post;
