import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;

};


function PostsComponent() {
    const{
        data: posts,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 1000 * 60,
        cacheTime: 1000 * 300,
        refetchOnWindowFocus: true,
        keepPreviousData: true,
    
    });


    if (isLoading) 
        return <p>Loading posts...</p>;
    if (isError)
        return <p>Error: {error.message}</p>;

    return(
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()} disabled={isFetching}>
                {isFetching ? "Refresing..." : "Refetch Posts"}
                </button>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default PostsComponent;