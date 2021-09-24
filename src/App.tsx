import React, { useState, useEffect, useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Post from './components/Post';
import PostHead from './components/PostHead';
import { AppContext } from './helper/Context';
import { reducer, inputReducer } from './reducer';
import { Posts } from './types';
import { sendHttpRequest, endpoint, endpointLimit } from './fetch';

const App = () => {
  const [posts, dispatch] = useReducer(reducer, []);
  const [input, dispatchText] = useReducer(inputReducer, {});
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [formState, setFormState] = useState('add');
  const [currentPost, setCurrentPost] = useState<Posts | null>(null);

  // ---------Fetch Posts----------
  useEffect(() => {
    sendHttpRequest('GET', endpointLimit).then(data => {
      dispatch({ type: 'fetch data', payload: data });
      setLoaded(true);
    });
  }, []);

  // ----------Delete Post----------
  const handleDelete = (post: Posts) => {
    sendHttpRequest('DELETE', `${endpoint}/${post.id}`).then(data => {
      dispatch({ type: 'delete', id: post.id });
    });
  };

  // ----------Submit Post (edit/add)----------
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // new data
    const newData = {
      title: input.title,
      body: input.body,
    };

    // if adding
    if (formState === 'add') {
      sendHttpRequest('POST', endpoint, newData).then(data => {
        dispatch({
          type: 'submit',
          newdata: data,
        });
      });

      setShow(false);
      dispatchText({
        type: 'clear',
      });

      // if editing
    } else if (formState === 'edit') {
      sendHttpRequest('PUT', `${endpoint}/${currentPost!.id}`, newData)
        .then(data => {
          dispatch({
            type: 'edit',
            post: currentPost,
            newdata: data,
          });
        })
        .catch(err => {
          console.log('problem comes from jsonplaceholder server' + err);
          dispatch({
            type: 'edit',
            post: currentPost,
            newdata: {
              title: input.title,
              body: input.body,
              id: posts.length + 50,
            },
          });
        });

      setShow(false);
    }
  };

  // ----------Open Form for editing----------
  const openEditForm = (post: Posts) => {
    setFormState('edit');
    setCurrentPost(post);
    input.title = post.title;
    input.body = post.body;
    setShow(true);
  };

  // ----------Handle Input changing----------
  const handleInputChange = (e: React.SyntheticEvent) => {
    dispatchText({
      type: 'handle text',
      field: (e.target as any).name,
      payload: (e.target as any).value,
    });
  };

  return (
    <Container fluid="sm">
      <AppContext.Provider
        value={{
          handleDelete,
          openEditForm,
          setShow,
          show,
          setFormState,
          formState,
          handleSubmit,
          handleInputChange,
          input,
          dispatch,
        }}>
        <Row sm="auto">
          <Col>
            <PostHead />
            {typeof posts !== 'undefined' &&
              loaded &&
              posts
                .map((post: Posts, index: number) => {
                  return <Post post={post} index={index} key={post.id} />;
                })
                .reverse()}
          </Col>
        </Row>
      </AppContext.Provider>
    </Container>
  );
};

export default App;
