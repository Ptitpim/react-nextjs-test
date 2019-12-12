import fetch from 'isomorphic-unfetch'
import moment from 'moment';
import Layout from '../components/Layout';
import Post from '../components/Post';

const Blog = ({ posts }) => {
    const sortedAsc = true;
    const orderedPosts = posts.sort((a, b) => {
        return sortedAsc ? a.date - b.date : b.date - a.date
    })

    return (
        <Layout>
            <h1 data-testid="page-title">Blog</h1>
            <div className="posts">
                {
                    orderedPosts.map((post, index) => (
                        <Post
                            key={index}
                            title={post.title}
                            text={post.text}
                            date={post.date}
                            src={post.src}
                        />
                    ))
                }
            </div>
        </Layout>
    )
};

Blog.getInitialProps = async ({ req }) => {
    const res = await fetch('https://upply-interview.herokuapp.com/')
    const json = await res.json()
    const posts = json.map(post => {
        const { title, text, date, src } = post
        return {
            title,
            text,
            date: date ? moment(date) : null,
            src,
        }
    })
    return {
        posts,
    };
};

export default Blog;
