import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";

export default function DetailedtPost() {

  const { id } = useLocalSearchParams();

  const detailedPost = posts.find((post) => post.id === id);
  
  if (!detailedPost) {
    return (
      <View>
        <Text>Post not found</Text>
      </View>
    );
  }

  return (
    <View>
        <PostListItem post={detailedPost} isDetailedPost={true}/>
    </View>
  );
}