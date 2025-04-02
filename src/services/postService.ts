import { SupabaseClient } from '@supabase/supabase-js';
import { Database, TablesInsert } from '../types/database.types';


type InsertPost =  TablesInsert<'posts'>;


export const fetchPosts = async (supabase: SupabaseClient<Database>) => {
    
  const { data, error } = await supabase
  .from("posts")
  .select(
    "*, group:groups(*), upvotes(value.sum()), nr_of_comments:comments(count)",
  )
  .order("created_at", { ascending: false })
  .range(0,3)
  if (error) {
    throw error;
 } else {
   return data;
 }
  
  };

  
export const fetchPostsById = async (id: string,supabase: SupabaseClient<Database>) => {
    
  const { data, error } = await supabase
  .from("posts")
  .select(
    "*, group:groups(*), upvotes(value.sum()), nr_of_comments:comments(count)",
  )
  .eq("id", id)
  .single();
    if (error) {
       throw error;
    } else {
      return data;
    }
    
  };


  export const fetchComments = async (
    postId: string,
    supabase: SupabaseClient<Database>,
  ) => {
    const { data, error } = await supabase
      .from("comments")
      .select("*, replies:comments(*)")
      .eq("post_id", postId)
      .is("parent_id", null);
  
    if (error) {
      throw error;
    } else {
      return data;
    }
  };

  export const fetchCommentsReplies = async (
    parentId: string,
    supabase: SupabaseClient<Database>,
  ) => {
    const { data, error } = await supabase
      .from("comments")
      .select("*, replies:comments(*)")
      .eq("parent_id", parentId)
      .is("parent_id", null);
  
    if (error) {
      throw error;
    } else {
      return data;
    }
  };
 

  export const deletePostById = async (id: string, supabase: SupabaseClient<Database>) => {
    
    const {data, error} = await supabase.from('posts').delete().eq('id', id);
    if (error) {
      throw error;
   } else {
     return data;
   }
  }

  export const insertPost = async (post : InsertPost, supabase: SupabaseClient<Database>) =>{
    // use supabase to insert a new post
  const {data, error} =  await supabase.from("posts").insert( post).select().single();
  
  if (error) {
    throw error;
  } else {
    return data;
  }
  }