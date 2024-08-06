"use client"
import React, { useState } from 'react';
import Navbar from '@/components/navbar';

const Page = () => {
  const [task, setTask] = useState(""); // Renamed settask to setTask for consistency
  const [mainTask, setMainTask] = useState([]); // Initialized as an empty array

  const submit = (e) => {
    e.preventDefault();
    if (task.trim()) { // Check if the task is not empty
      setMainTask([...mainTask, { task }]); // Add new task object to the array
      setTask(""); // Clear the input field
    }
  };

  const removeTask = (index) => {
    setMainTask(mainTask.filter((_, i) => i !== index)); // Remove task by index
  };

  return (
    <div className='overflow-hidden h-[100vh] w-[100vw] bg-gray-300'>
      <Navbar/>
      <main className='h-90vh w-full flex justify-center pt-16 gap-8'>
        <form className='flex gap-8 items-center' onSubmit={submit}>
          <input
            type="text"
            placeholder='Enter your task'
            className='px-5 border-black border-2 rounded-xl text-center outline-none'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type='submit'
            className='border-black border-1 rounded-xl bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4'
          >
            Add
          </button>
        </form>
      </main>
      <div className='items-center justify-center flex py-16'>
        <div className="w-full max-w-2xl bg-gradient-to-r from-blue-400 to-green-400 px-6 py-4 rounded-2xl h-auto max-h-[60vh] overflow-y-auto">
          <h1 className='text-[1.5rem] font-bold p-5 text-white'>Your Todos:</h1>
          <ul className='flex flex-col gap-5'>
            {mainTask.length === 0 ? (
              <h2 className='text-center text-white'>No Tasks Available</h2>
            ) : (
              mainTask.map((item, index) => (
                <li key={index} className='bg-white px-4 py-2 rounded-md shadow-md flex justify-between items-center'>
                  {item.task}
                  <button
                    onClick={() => removeTask(index)}
                    className='bg-red-600 text-white px-2 py-1 rounded-md ml-4'
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
