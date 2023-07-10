import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function ProjectIdNotFound({ projectId }) {
  useEffect(() => {
    alert(`Project with id '${projectId}' not found.`);
  }, []);

  return <Navigate to='..' relative='path' />;
}
