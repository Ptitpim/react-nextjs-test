import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import Post from '../components/Post';

const Blog = ({ posts }) => (
    <Layout>
        <h1 data-testid="page-title">Blog</h1>
        <div className="posts">
        {
            posts.map((post, index) => (
                <Post key={index} title={post.title} text={post.text} date={post.date} src={post.src} />
            ))
        }
        </div>
    </Layout>
);

Blog.getInitialProps = async ({ req }) => {
    const res = await fetch('https://upply-interview.herokuapp.com/')
    const json = await res.json()
    return {
        posts: json,
    };
};

export default Blog;
