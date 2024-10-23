"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Roboto } from "next/font/google";
import React, { useEffect } from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const schema = z.object({
  id: z.number().optional(),
  user: z.string().min(1, { message: 'User is required' }),
  title: z.string().min(1, { message: 'Title is mandatory' }),
  description: z.string().min(1, { message: 'Description is mandatory' }),
  profilePicture: z.any(),
  videoCover: z.any(),
});
export type IPosts = z.infer<typeof schema>;

interface IFormsProps {
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalEdit: boolean;
  posts: IPosts[];
  setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
  postToEdit?: IPosts; 
}

export default function FormPosts({ setOpenModalEdit, isOpenModalEdit, posts, setPosts, postToEdit }: IFormsProps) {
  const form = useForm<IPosts>({
    resolver: zodResolver(schema),
    defaultValues: postToEdit || {}, 
  });

  const { handleSubmit, reset, setValue } = form;

  useEffect(() => {
    if (postToEdit) {
      Object.keys(postToEdit).forEach((key) => {
        setValue(key as keyof IPosts, postToEdit[key as keyof IPosts]);
      });
    }
  }, [postToEdit, setValue]);

  const addPost: SubmitHandler<IPosts> = async (data) => {
    const fileForBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        if (file instanceof Blob) {
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (erro) => reject(erro);
        } else {
          reject(new Error("File is not a valid Blob or File"));
        }
      });
    };
  
    const photoPerfil_Base64 = data.profilePicture?.[0] instanceof File
      ? await fileForBase64(data.profilePicture[0])
      : "";
  
    const capaVideo_Base64 = data.videoCover?.[0] instanceof File
      ? await fileForBase64(data.videoCover[0])
      : "";
  
    const newPost = {
      ...data,
      profilePicture: photoPerfil_Base64,
      videoCover: capaVideo_Base64,
      id: posts.length > 0 ? (posts[posts.length - 1]?.id ?? 0) + 1 : 1
    };
    const newPosts = [...posts, newPost];
  
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts));
    console.log("posts:", newPosts);
    reset();
    setOpenModalEdit(false);
  };
  

  if (!isOpenModalEdit) return null;

  return (
    <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
      <div className={`${roboto.className} bg-slate-100 p-8 rounded-[20px]`}>
        <h1 className='mb-4 font-bold text-2xl'>{postToEdit ? "Edit Post" : "Add a new post"}</h1>
        <Form {...form}>
          <form onSubmit={handleSubmit(addPost)} className="formulario">
            
            <FormField
              name="user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter the user name..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter the title of the video..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video description</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter the video description..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="profilePicture"
              render={() => (
                <FormItem>
                  <FormLabel>Profile Photo</FormLabel>
                  <FormControl>
                    <input
                      placeholder='Select an image'
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files) {
                          setValue("profilePicture", e.target.files);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="videoCover"
              render={() => (
                <FormItem>
                  <FormLabel>Video Cover Image</FormLabel>
                  <FormControl>
                    <input
                      placeholder='Select an image'
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files) {
                          setValue("videoCover", e.target.files);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className='mr-4' type="submit">{postToEdit ? "Save Changes" : "Add Post"}</Button>
            <Button type="button" className="mt-4" onClick={() => setOpenModalEdit(false)}>
              Cancel
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
