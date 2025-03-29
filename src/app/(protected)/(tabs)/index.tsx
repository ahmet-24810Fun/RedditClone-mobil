import {useState, useEffect} from "react";
import {Text, View, FlatList, ActivityIndicator } from "react-native";
import PostListItem from "../../../components/PostListItem";
//import posts from "../../../../assets/data/posts.json";

import {supabase} from "../../../lib/supabase";
//import { Post } from "../../../types";
import { Tables } from "../../../types/database.types";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../../services/postService";


type Post = Tables<"posts"> & {
  group: Tables<"groups">;
  user: Tables<"users">;
}




export default function HomeScreen() {

  const { data: posts, isLoading, error, refetch, isRefetching} = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts()
  })
  
 



 if (isLoading) {
  return <ActivityIndicator />;
}

if (error) {
  console.log(error);
  return <Text>Error fetching posts</Text>;
}

  return (
    <View>
    <FlatList 
     data={posts}
      renderItem={({item}) => <PostListItem post={item} />} 
      onRefresh={refetch}
      refreshing={isRefetching}
      />

    </View>
  
  );
}



