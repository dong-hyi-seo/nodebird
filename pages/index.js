import React from 'react';
import {useSelector} from "react-redux";

import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const {mainPosts}= useSelector((state) => state.post);
    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {/* 반복문 생성시 component에 key를 필수적으로 줘야한다. */}
            {mainPosts.map((post) => <PostCard key={post.id} post={post}/>)}

        </AppLayout>
    )
}
export default Home;