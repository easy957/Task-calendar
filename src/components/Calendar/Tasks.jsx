function Tasks({ isLoading, tasks }) {
  if (isLoading) return <p>Loading</p>;

  return (
    <>
      {tasks.map((task) => (
        <p>{task.taskDescription}</p>
      ))}
    </>
  );
}

export default Tasks;
