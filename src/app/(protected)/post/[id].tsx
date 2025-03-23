import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";
import { fetchPostsById } from "../../../services/postService";
import { useQuery } from "@tanstack/react-query";

export default function DetailedtPost() {

  const { id } = useLocalSearchParams<{id : string}>();

  const {data : post, isLoading, error} = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPostsById(id)
  });

  const detailedPost = posts.find((post) => post.id === id);
  
  

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error || !post) {
    return (
      <View>
        <Text>Post not found</Text>
      </View>
    );
  }
  return (
    <View>
        <PostListItem post={post} isDetailedPost={true}/>
    </View>
  );
}