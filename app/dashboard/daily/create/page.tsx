"use client";

import React, { useState } from "react";
import { mockParticipants, mockUserStories } from "../../../lib/data";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function CreateDailyPage() {
  const [date, setDate] = useState("");
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>(
    []
  );
  const router = useRouter();
  const [selectedStory, setSelectedStory] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const daily = {
      date,
      participants: selectedParticipants,
      storyId: selectedStory,
    };

    console.log("Daily créé :", daily);

    // TODO: Envoyer vers une API ou stocker ailleurs
    router.push("/dashboard/daily");
  };

  const toggleSelection = (
    id: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10">
      <h1 className="text-2xl font-bold mb-4">Créer un Daily</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date du Daily
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 shadow"
          />
        </div>

        {/* Participants */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Participants
          </label>
          <div className="grid grid-cols-2 gap-2">
            {mockParticipants.map((p) => (
              <button
                type="button"
                key={p.id}
                className={`px-3 py-2 rounded border ${
                  selectedParticipants.includes(p.id)
                    ? "bg-blue-200 border-blue-500"
                    : "bg-gray-100"
                }`}
                onClick={() =>
                  toggleSelection(
                    p.id,
                    selectedParticipants,
                    setSelectedParticipants
                  )
                }
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stories */}
        <div id="input" className="relative">
          <label className="block text-gray-800 mb-2" htmlFor="story">
            Story du jour
          </label>
          <div className="grid grid-cols-1 rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[select:focus]:outline-2 has-[select:focus]:-outline-offset-2 has-[select:focus]:outline-indigo-600 focus-within:relative">
            <select
              id="story"
              name="story"
              value={selectedStory}
              onChange={(e) => setSelectedStory(e.target.value)}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            >
              <option value="" disabled>
                -- Choisir une story --
              </option>
              {mockUserStories.map((story) => (
                <option key={story.id} value={story.id}>
                  {story.title}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
          >
            Créer le Daily
          </button>
        </div>
      </form>
    </div>
  );
}
