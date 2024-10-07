import { myTasks } from "@/constants/data";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-20 container px-20 py-10">
      {myTasks.map((task) => (
        <div
          key={task.id}
          className="bg-gray-200 p-4 rounded-md shadow flex flex-col gap-3"
        >
          <div className="flex gap-3">
            <p>Task: {task.id}</p>
            <p
              className={`${task.completed ? "text-green-600 font-bold " : "text-black"}`}
            >
              {task.completed ? "Completed" : "Not Completed"}
            </p>
          </div>
          <h2 className="text-lg font-bold text-green-500">{task.name}</h2>
          <p className="text-sm text-gray-600">{task.description}</p>
          <div className="flex gap-5">
            <a
              className="text-sm text-gray-600 underline hover:text-orange-500"
              href={task.completed && task.gitHubLink}
              target="_blank"
            >
              GitHub Link
            </a>
            <a
              className="text-sm text-gray-600 underline hover:text-orange-500"
              href={task.completed && task.hostedLink}
              target="_blank"
            >
              Hosted Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
