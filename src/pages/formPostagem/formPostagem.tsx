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
  videoCover: z.any()
});

export type IPostagens = z.infer<typeof schema>;

interface IFormsProps {
  setOpenModalCriar: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalCriar: boolean;
  postagens: IPostagens[];
  setPostagens: React.Dispatch<React.SetStateAction<IPostagens[]>>;
}

export default function FormPostagens({ setOpenModalCriar, isOpenModalCriar, postagens = [], setPostagens }: IFormsProps) {
  const form = useForm<IPostagens>({
    resolver: zodResolver(schema),
    defaultValues: { user: "", title: "", description: "", profilePicture: "", videoCover: "" }
  });

  const { handleSubmit, reset, setValue } = form;


  const addPostagem: SubmitHandler<IPostagens> = async (data) => {
    const reader = new FileReader();
    const videoCoverReader = new FileReader();

    reader.onloadend = () => {
      const profilePictureUrl = reader.result as string;

      videoCoverReader.onloadend = () => {
        const videoCoverUrl = videoCoverReader.result as string;
        const newPostagem = {
          ...data,
          profilePicture: profilePictureUrl,
          videoCover: videoCoverUrl,
          id: postagens.length ? postagens[postagens.length - 1].id! + 1 : 1 
        };
        setPostagens((prevPostagens) => [...prevPostagens, newPostagem]);
        console.log("postagens:", postagens)
        reset();
        setOpenModalCriar(false);
      };
     
      
      if (data.videoCover && data.videoCover.length > 0) {
        videoCoverReader.readAsDataURL(data.videoCover[0]);
      }
    };

    if (data.profilePicture && data.profilePicture.length > 0) {
      reader.readAsDataURL(data.profilePicture[0]);
    }
  };

  useEffect(() => {
    localStorage.setItem('postagens', JSON.stringify(postagens))
    console.log("dentro do useEffect")
    console.log(localStorage);
  }, [postagens]);

  if (!isOpenModalCriar) return null;

  return (
    <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
      <div className={`${roboto.className} bg-slate-100 p-8 rounded-[20px]`}>
        <h1 className='mb-4 font-bold text-2xl'>Add a new post</h1>
        <Form {...form}>
          <form onSubmit={handleSubmit(addPostagem)} className="formulario">
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

            <Button className='mr-4' type="submit">Add Postagem</Button>
            <Button type="button" className="mt-4" onClick={() => setOpenModalCriar(false)}>
              Cancel
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
