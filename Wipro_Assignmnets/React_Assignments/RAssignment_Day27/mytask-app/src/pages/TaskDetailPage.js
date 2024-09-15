import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { getTaskById } from '../services/taskService';
import TaskDetails from '../components/TaskDetails';


const TaskDetailPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await getTaskById(id);
        setTask(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTask();
  }, [id]);

  return (
    <div className="Taskdetailspage container">
      <h1>Task Details</h1>
      <TaskDetails task={task} />
      <Link to="/" className="btn btn-primary mt-3" style={{marginLeft:'10px'}}>Back to Home</Link>
    </div>
  );
};

export default TaskDetailPage;
