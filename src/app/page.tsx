import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import { Todos } from "@/components/Todos";

const page = () => {
  return (
    <main className="container mx-auto px-5 sm:px-0 py-20 flex flex-col items-center min-h-[85vh]">
      <div className="flex flex-col items-start gap-5">
        <h2 className="text-center w-full text-2xl font-semibold">
          TaskPlanner
        </h2>
        <Navbar />
        <AddTodo />
        <Todos />
      </div>
    </main>
  );
};

export default page;
