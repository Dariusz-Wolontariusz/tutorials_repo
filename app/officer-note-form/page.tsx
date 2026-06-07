"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  note: z.string().min(1, "Note is required"),
  priority: z.enum(["low", "medium", "high"]),
});

type Schema = z.infer<typeof schema>;

const taxpayerID: string = "12345";

const page = () => {
  const { register, handleSubmit, reset } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const [message, setMessage] = useState<string>("");

  const onSubmit = async (data: Schema) => {
    try {
      const updatedData = { ...data, taxpayerID: taxpayerID };
      const response = await fetch("exampleAPI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      setMessage("Note sent successfully.");
      reset();
    } catch (error) {
      setMessage("An error has occured.");
    }
  };

  return (
    <div>
      <h1>Note Sender</h1>
      <h2>User ID: {taxpayerID}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="note">Your note:</label>
        <textarea
          {...register("note")}
          className="note"
          placeholder="Write your note here"
        />
        <label htmlFor="priority">Choose priority</label>
        <select {...register("priority")} defaultValue="">
          <option value="" disabled>
            Choose Priority
          </option>
          <option value="low">Low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        {message.length > 0 && <p>{message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default page;
