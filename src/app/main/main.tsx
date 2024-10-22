"use client"
import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'; 

const schema = z.object({
  id: z.number(),
  user: z.string().min(1, { message: 'User is required' }),
  title: z.string().min(1, { message: 'Title is mandatory' }),
  description: z.string().min(1, { message: 'Description is mandatory' }),
  profilePicture: z.any(), 
  videoCover: z.any() 
});

interface IPostagens extends z.infer<typeof schema> {}

export default function Main() {
  const [postagens, setPostagens] = useState<IPostagens[]>(() => {
    const savedPostagens = localStorage.getItem('postagens');
    return savedPostagens ? JSON.parse(savedPostagens) : [];
  });

  const form = useForm<IPostagens>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, formState: { errors }, reset, setValue } = form;

  useEffect(() => {
    localStorage.setItem('postagens', JSON.stringify(postagens));
  }, [postagens]);

  const addPostagem: SubmitHandler<IPostagens> = (data) => {
    const reader = new FileReader();
    const videoCoverReader = new FileReader();
    
    reader.onloadend = () => {
      const profilePicture = reader.result as string;
      
      videoCoverReader.onloadend = () => {
        const videoCover = videoCoverReader.result as string;
        const newPostagem = { ...data, id: postagens.length + 1, profilePicture, videoCover };
        setPostagens([...postagens, newPostagem]);
        reset();
      };
      
      videoCoverReader.readAsDataURL(data.videoCover[0]);
    };

    reader.readAsDataURL(data.profilePicture[0]);
  };

  const deletePostagem = (id: number) => {
    setPostagens(postagens.filter(postagem => postagem.id !== id));
  };

  return (
    <div>
      <h1>Galeria de Postagens</h1>
      <Form {...form}>
        <form onSubmit={handleSubmit(addPostagem)} className="formulario">
          <FormField
            name="user"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="User" />
                </FormControl>
                <FormDescription>Enter the user name.</FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Title" />
                </FormControl>
                <FormDescription>Enter the post title.</FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Description" />
                </FormControl>
                <FormDescription>Enter the post description.</FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name="profilePicture"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Photo</FormLabel>
                <FormControl>
                  <input
                  placeholder='Select a profile photo'
                    type="file"
                    onChange={(e) => setValue("profilePicture", e.target.files)}
                  />
                </FormControl>
                <FormDescription>Upload your profile photo.</FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            name="videoCover"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video Cover Image</FormLabel>
                <FormControl>
                  <input
                  placeholder='Select a video cover image'
                    type="file"
                    onChange={(e) => setValue("videoCover", e.target.files)}
                  />
                </FormControl>
                <FormDescription>Upload your video cover image.</FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <Button type="submit">Add Postagem</Button>
        </form>
      </Form>

      <div className="galeria">
        {postagens.map(postagem => (
          <div key={postagem.id} className="postagem">
            <h3>{postagem.title}</h3>
            <p>Por: {postagem.user}</p>
            <img src={postagem.profilePicture} alt={postagem.user} style={{ width: '200px' }} />
            <img src={postagem.videoCover} alt={`Capa do vídeo de ${postagem.title}`} style={{ width: '200px' }} />
            <p>{postagem.description}</p>
            <Button onClick={() => deletePostagem(postagem.id)}>Remover</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
