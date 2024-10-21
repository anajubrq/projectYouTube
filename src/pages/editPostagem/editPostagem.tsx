"use client";

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; 
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const schema = z.object({
  id: z.number(),
  user: z.string().min(1, { message: 'User is required' }),
  title: z.string().min(1, { message: 'Title is mandatory' }),
  description: z.string().min(1, { message: 'Description is mandatory' }),
  profilePicture: z.any(), 
  videoCover: z.any() 
});

export type IPostagens = z.infer<typeof schema>;

interface IEditProps {
  postagens: IPostagens; 
  onEditPostagem: (updatedPostagem: IPostagens) => void; 
  setOpenModalCriar: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalCriar: boolean;
}

export default function EditPostagens({ postagens, onEditPostagem, isOpenModalCriar, setOpenModalCriar }: IEditProps) {
  const form = useForm<IPostagens>({
    resolver: zodResolver(schema),
    defaultValues: postagens,
  });

  const { handleSubmit, reset, setValue } = form;

  useEffect(() => {
    if (!isOpenModalCriar) {
      reset();
    } else {
      reset(postagens); 
    }
  }, [isOpenModalCriar, postagens, reset]);

  const addPostagem: SubmitHandler<IPostagens> = (data) => {
    const reader = new FileReader();
    const videoCoverReader = new FileReader();

    reader.onloadend = () => {
      const profilePicture = reader.result as string;

      videoCoverReader.onloadend = () => {
        const videoCover = videoCoverReader.result as string;
        const updatedPostagem = { ...data, profilePicture, videoCover };
        onEditPostagem(updatedPostagem); 
        setOpenModalCriar(false); 
        reset(); 
      };

      if (data.videoCover && data.videoCover.length > 0) {
        videoCoverReader.readAsDataURL(data.videoCover[0]);
      }
    };

    if (data.profilePicture && data.profilePicture.length > 0) {
      reader.readAsDataURL(data.profilePicture[0]); 
    }
  };

  if (!isOpenModalCriar) return null; 

  return (
    <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
      <div className={`${roboto.className} flex flex-col justify-center items-center w-full h-screen bg-slate-100 p-8 rounded-[20px]`}>
        <h1 className='mb-4 font-bold text-2xl'>Edit Post</h1>
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

            <div className="flex justify-end mt-4">
              <Button className='mr-2' type="submit">Save Changes</Button>
              <Button type="button" onClick={() => setOpenModalCriar(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
