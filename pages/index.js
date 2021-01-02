import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POST_REQUEST } from '../reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostLoading } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, []);

  useEffect(() => {
    /**
     * 1. 스크롤이벤트가 엄청빠르게 발생되어 LOAD_POST_REQUEST 이벤트가 많이발생됨
     * 한번만 발생되도록 할려면 ? - loading state값 가지고 구분
     *
     * 2. 계속 스크롤 내리면 card 항목이 생길텐데 하나하나가 브라우저 메모리를 잡아먹음
     * 해결 : 보이는 view안에 최대 2~3개 card를 보여주고 스크롤내릴때는 전 card component 제거 올릴때는 후 card component 제거
     * 이 역할을 해주는 라이브러리 존재 : react-virtualized (인스타에서도사용)
     */
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostLoading) {
          dispatch({
            type: LOAD_POST_REQUEST,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      // scroll 이벤트 항상 제거해줘야지 메모리에 안쌓인다
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostLoading]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {/* 반복문 생성시 component에 key를 필수적으로 줘야한다. */}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}

    </AppLayout>
  );
};
export default Home;
